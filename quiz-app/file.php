<?php

// Include PHPMailer
require 'phpmailer/PHPMailerAutoload.php';

// Set up PHPMailer
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.example.com'; // Your SMTP host
$mail->SMTPAuth = true;
$mail->Username = 'your_username@example.com'; // Your SMTP username
$mail->Password = 'your_password'; // Your SMTP password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('your_username@example.com', 'Your Name');
$mail->addAddress('recipient@example.com', 'Recipient Name'); // Recipient email address

// Take a screenshot using GrabzIt
$grabzItHandler = new GrabzItHandler('your_grabzit_application_key', 'your_grabzit_application_secret');
$grabzItHandler->URLToImage('https://example.com');

// Convert the image to base64
$base64Image = $grabzItHandler->SaveToBase64();

// Attach the screenshot to the email
$mail->addStringAttachment(base64_decode($base64Image), 'screenshot.png');

// Email body
$mail->Subject = 'Screenshot from Web Page';
$mail->Body = 'Please find the attached screenshot of the webpage.';

// Send the email
if (!$mail->send()) {
    echo 'Email could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Email has been sent.';
}

?>