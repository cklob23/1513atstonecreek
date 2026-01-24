# ==============================
# CONFIG
# ==============================
$ApiKey = "AIzaSyB6CCTBVb-Y43q0clrPT1FmQfTMrIC64fY"
$DriveFolderId = "1sjgfMGPnD6iRlyZsmazYSxZjBztMt_0n"
$PublicDir = "D:\src\1513 Photos\"
$GalleryFile = "D:\src\1513-at-stone-creek\components\gallery.tsx"
$PublicPrefix = "/"

# Only download files added in the last X days
$DaysBack = 14
$CutoffDate = (Get-Date).AddDays(-$DaysBack).ToString("yyyy-MM-ddTHH:mm:ssZ")

$AllowedExtensions = @(".jpg", ".jpeg", ".png", ".webp")
$FilePrefix = "1513-photo"

# ==============================
# READ EXISTING GALLERY CONTENT
# ==============================
$galleryContent = Get-Content $GalleryFile -Raw

# Existing src values
$existingSrcs = [regex]::Matches($galleryContent, 'src:\s*"([^"]+)"') |
ForEach-Object { $_.Groups[1].Value }

# Existing photo numbers
$existingNumbers = [regex]::Matches($galleryContent, '1513 Photo (\d+)') |
ForEach-Object { [int]$_.Groups[1].Value }

$nextPhotoNumber = if ($existingNumbers.Count -gt 0) {
    ($existingNumbers | Measure-Object -Maximum).Maximum + 1
}
else {
    1
}

Write-Host "Starting at photo number: $nextPhotoNumber"

# ==============================
# GET FILES FROM GOOGLE DRIVE
# ==============================
$uri = "https://www.googleapis.com/drive/v3/files?q='$DriveFolderId'+in+parents+and+mimeType+contains+'image/'+and+createdTime+>+'$CutoffDate'&fields=files(id,name,createdTime)&orderBy=createdTime+desc&key=$ApiKey"
$response = Invoke-RestMethod -Uri $uri -Method Get

# ==============================
# PROCESS FILES
# ==============================
$newEntries = @()

foreach ($file in $response.files | Sort-Object name) {

    $originalName = $file.name
    $fileId = $file.id
    $originalExt = [System.IO.Path]::GetExtension($originalName).ToLower()

    # Validate extension
    if ($AllowedExtensions -notcontains $originalExt) {
        Write-Host "Skipping (invalid extension): $originalName"
        continue
    }

    # FORCE .jpg
    $newFileName = "{0}-{1}.jpg" -f $FilePrefix, $nextPhotoNumber
    $publicSrc = "$($PublicPrefix)$($newFileName)"
    $localPath = Join-Path $PublicDir $newFileName

    # Skip duplicates
    if ($existingSrcs -contains $publicSrc) {
        Write-Host "Skipping (already in gallery): $newFileName"
        continue
    }

    if (Test-Path $localPath) {
        Write-Host "Skipping (already exists): $newFileName"
        continue
    }

    # Download
    Write-Host "Downloading: $originalName → $newFileName"
    $downloadUrl = "https://www.googleapis.com/drive/v3/files/$($fileId)?alt=media&key=$ApiKey"
    Invoke-WebRequest -Uri $downloadUrl -OutFile $localPath

    # Gallery entry
    $newEntries += "  { src: `"$publicSrc`", alt: `"1513 Photo $nextPhotoNumber`" },"
    $nextPhotoNumber++
}

# ==============================
# INSERT INTO gallery.tsx
# ==============================
if ($newEntries.Count -gt 0) {

    $insertBlock = "`n" + ($newEntries -join "`n")

    $updatedContent = $galleryContent -replace '(const\s+images\s*=\s*\[)', "`$1$insertBlock"

    Set-Content -Path $GalleryFile -Value $updatedContent

    Write-Host "✅ Added $($newEntries.Count) new photos"
}
else {
    Write-Host "✅ No new images found"
}

# ==============================
# RANDOMIZE IMAGES ARRAY
# ==============================
Write-Host "🔀 Randomizing images array..."

$galleryContent = Get-Content $GalleryFile -Raw

# Match the images array block
if ($galleryContent -match '(const\s+images\s*=\s*\[)([\s\S]*?)(\])') {

    $arrayStart = $matches[1]
    $arrayBody = $matches[2]
    $arrayEnd = $matches[3]

    # Split lines
    $lines = $arrayBody -split "`n"

    # Active image entries
    $activeEntries = $lines | Where-Object {
        $_ -match '^\s*\{\s*src:\s*".+?",\s*alt:\s*".+?"\s*\},'
    }

    # Commented or non-image lines
    $otherLines = $lines | Where-Object {
        $_ -notmatch '^\s*\{\s*src:\s*".+?",\s*alt:\s*".+?"\s*\},'
    }

    # Shuffle active entries
    $shuffledEntries = $activeEntries | Sort-Object { Get-Random }

    # Rebuild array body
    $newArrayBody = @(
        $otherLines
        $shuffledEntries
    ) -join "`n"

    # Replace content
    $newGalleryContent = $galleryContent -replace `
        '(const\s+images\s*=\s*\[[\s\S]*?\])',
    "$arrayStart$newArrayBody$arrayEnd"

    Set-Content -Path $GalleryFile -Value $newGalleryContent

    Write-Host "✅ Images array randomized"
}
else {
    Write-Host "⚠️ Could not locate images array"
}
