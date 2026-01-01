# Path to the folder containing photos
$photoFolder = "D:\src\1513 Photos"

# Get all JPG files
$photos = Get-ChildItem -Path $photoFolder -Filter *.jpg | Where-Object {$_.LastWriteTime -like "*12/29*"} | Sort-Object Name

# Counter for alt text numbering
$counter = 1

# Generate formatted strings
$results = foreach ($photo in $photos) {
    "{ src: `"/$($photo.Name)`", alt: `"1513 Photo $counter`" },"
    $counter++
}

# Output to console
$results

# Optional: save to a file
# $results | Out-File "1513-photo-strings.txt" -Encoding UTF8
