<?php

$recipient = "leventesop@gmail.com";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];

$mailheader = "From: ".$email."\r\n";
$mailheader .= "Reply-To: ".$email."\r\n";

$full_message = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

$subject = "game development";

mail($recipient, $subject, $full_message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        body {
            background: #ab190b; /* Set your desired background color */
            margin: 0; /* Remove default body margin */
            padding: 0; /* Remove default body padding */
        }

        .thank-you {
            /* Adjust container styles as needed */
            max-width: 1200px; /* Example max-width */
            margin: 0 auto; /* Center the container */
            padding: 20px; /* Example padding */
            right: 0;
        }

        h1 {
            opacity: 0.99!important;
            color: white; /* Set the font color to white */
            font-family: Helvetica, Roboto, Arial, sans-serif;
            font-weight: 600; /* Example font weight */
            font-size: 5rem; /* Example font size */
            margin-bottom: 20px; /* Example margin */
        }

        .center {
            width: 100%; /* Adjust the width as needed */
            margin: 0 auto; /* Set margin to auto for horizontal centering */
        }
    </style>
</head>
<body>
    <div class="container thank-you">
        <video autoplay muted loop id="video-background"> <source src="vid/resume_firegames.mp4" type="video/mp4"> </video>
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
    </div>
    <div class="container text-center">
        <a class="btn btn-blank" href="index.html" role="button" style="text-align: center; display: block; font-size: 56px; font-family: Helvetica, sans-serif, Arial; padding: 12px 20px; text-decoration: none!important;">Back</a>
    </div>
</body>
</html>

';


?>