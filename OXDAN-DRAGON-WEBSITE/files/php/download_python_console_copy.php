<?php
// File path
$filePath = 'path_to_zip_files/Oxdan-Dragon-Console-Python-1-2023-Setup.zip'; // Replace with the actual path to your file.

// Set headers
header("Content-Type: application/octet-stream");
header("Content-Disposition: attachment; filename=" . basename($filePath));
header("Content-Length: " . filesize($filePath));

// Read and output the file
readfile($filePath);
?>
