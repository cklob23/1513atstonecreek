# Path to the temp folder
$sourceFolder = "D:\src\1513 Photos\Temp"

# Path to the folder containing photos
$destinationFolder = "D:\src\1513 Photos"

# Ensure destination exists
if (-not (Test-Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder | Out-Null
}

# Get all .jpeg files sorted
$files = Get-ChildItem -Path $sourceFolder -Filter *.jp* | Sort-Object Name

# Start counter
$counter1 = 1

foreach ($file in $files) {
    $newName = "1513image$counter1.jpg"
    $destinationPath = Join-Path $destinationFolder $newName
    Rename-Item -Path $file.FullName -NewName $newName
    # Prevent overwriting existing files
    if (Test-Path $destinationPath) {
        Write-Warning "Skipping $($file.Name) — $newName already exists"
        $counter1++
        continue
    }

    # Rename and move in one step
    Move-Item -Path "$($sourceFolder)\$($newName)" -Destination $destinationPath

    Write-Host "Moved and renamed: $($file.Name) → $newName"
    $counter1++
}

# Get all JPG files
$photos = Get-ChildItem -Path $destinationFolder -Filter *.jpg | Where-Object {$_.Name -like "1513image*"} | Sort-Object Name

# Counter for alt text numbering
$counter2 = 32

# Generate formatted strings
$results = foreach ($photo in $photos) {
    "{ src: `"/$($photo.Name)`", alt: `"1513 Photo $counter2`" },"
    $counter2++
}

# Output to console
$results

# Optional: save to a file
# $results | Out-File "1513-photo-strings.txt" -Encoding UTF8
