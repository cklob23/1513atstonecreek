# ==============================
# CONFIG
# ==============================
$SourceFolder = "G:\.shortcut-targets-by-id\1sjgfMGPnD6iRlyZsmazYSxZjBztMt_0n\1513 Photos"
$PublicFolder = "D:\src\1513-at-stone-creek\public"
$GalleryFile = "D:\src\1513-at-stone-creek\components\gallery.tsx"
$PublicPrefix = "/"

$DaysBack = 14
$CutoffDate = (Get-Date).AddDays(-$DaysBack)

$AllowedExtensions = @(".jpg", ".jpeg", ".png", ".webp")
$JpegQuality = 90
$FilePrefix = "1513-photo"

Add-Type -AssemblyName System.Drawing

# Ensure public folder exists
if (-not (Test-Path $PublicFolder)) {
    New-Item -ItemType Directory -Path $PublicFolder | Out-Null
}

# ==============================
# READ EXISTING GALLERY
# ==============================
$galleryContent = Get-Content $GalleryFile -Raw

$existingSrcs = [regex]::Matches($galleryContent, 'src:\s*"([^"]+)"') |
ForEach-Object { $_.Groups[1].Value }

$existingNumbers = [regex]::Matches($galleryContent, '1513 Photo (\d+)') |
ForEach-Object { [int]$_.Groups[1].Value }

$nextPhotoNumber = if ($existingNumbers.Count -gt 0) {
    ($existingNumbers | Measure-Object -Maximum).Maximum + 1
}
else { 1 }

Write-Host "Starting at photo number: $nextPhotoNumber"

# ==============================
# GET RECENT FILES
# ==============================
$recentFiles = Get-ChildItem $SourceFolder -File |
Where-Object {
    $_.LastWriteTime -gt $CutoffDate -and
    $AllowedExtensions -contains $_.Extension.ToLower()
} |
Sort-Object LastWriteTime

$newEntries = @()

# ==============================
# PROCESS FILES
# ==============================
foreach ($file in $recentFiles) {

    $newFileName = "$FilePrefix-$nextPhotoNumber.jpg"
    $destPath = Join-Path $PublicFolder $newFileName
    $publicSrc = "$PublicPrefix$newFileName"

    if ($existingSrcs -contains $publicSrc) {
        Write-Host "Skipping (already in gallery): $newFileName"
        $nextPhotoNumber++
        continue
    }

    if (Test-Path $destPath) {
        Write-Host "Skipping (already exists in public): $newFileName"
        $nextPhotoNumber++
        continue
    }

    Write-Host "Processing: $($file.Name) → $newFileName"

    # Convert to JPG if needed
    if ($file.Extension.ToLower() -ne ".jpg") {

        $image = [System.Drawing.Image]::FromFile($file.FullName)

        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq "image/jpeg" }

        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, [long]$JpegQuality
        )

        $image.Save($destPath, $jpegCodec, $encoderParams)
        $image.Dispose()
    }
    else {
        Copy-Item $file.FullName $destPath
    }

    $newEntries += "  { src: `"$publicSrc`", alt: `"1513 Photo $nextPhotoNumber`" },"
    $nextPhotoNumber++
}

# ==============================
# INSERT INTO GALLERY
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
# RANDOMIZE ARRAY
# ==============================
Write-Host "🔀 Randomizing images array..."

$galleryContent = Get-Content $GalleryFile -Raw

if ($galleryContent -match '(const\s+images\s*=\s*\[)([\s\S]*?)(\])') {

    $arrayStart = $matches[1]
    $arrayBody = $matches[2]
    $arrayEnd = $matches[3]

    $lines = $arrayBody -split "`n"

    $activeEntries = $lines | Where-Object {
        $_ -match '^\s*\{\s*src:\s*".+?",\s*alt:\s*".+?"\s*\},'
    }

    $otherLines = $lines | Where-Object {
        $_ -notmatch '^\s*\{\s*src:\s*".+?",\s*alt:\s*".+?"\s*\},'
    }

    $shuffledEntries = $activeEntries | Sort-Object { Get-Random }

    $newArrayBody = @(
        $otherLines
        $shuffledEntries
    ) -join "`n"

    $newGalleryContent = $galleryContent -replace `
        '(const\s+images\s*=\s*\[[\s\S]*?\])',
    "$arrayStart$newArrayBody$arrayEnd"

    Set-Content -Path $GalleryFile -Value $newGalleryContent

    Write-Host "✅ Images array randomized"
}
else {
    Write-Host "⚠️ Could not locate images array"
}