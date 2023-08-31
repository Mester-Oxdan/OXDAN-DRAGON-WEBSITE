<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    // Save registration data to a file
    $filename = 'registrations.txt';
    $file = fopen($filename, 'a');
    fwrite($file, "Username: $username\nEmail: $email\nPassword: $password\n\n");
    fclose($file);

    echo 'success';
} else {
    echo 'error';
}
?>
