<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password'];

    // Read the user credentials from the file
    $filename = 'registrations.txt';
    $file = fopen($filename, 'r');
    while (($line = fgets($file)) !== false) {
        $credentials = explode(':', $line);
        $storedUsername = trim($credentials[1]); // Adjust index if necessary
        $storedPassword = trim($credentials[1]); // Adjust index if necessary

        // Check if the entered credentials match
        if ($username === $storedUsername && $password === $storedPassword) {
            fclose($file);
            echo 'success';
            exit;
        }
    }

    fclose($file);
    echo 'error';
    exit;
}
?>
