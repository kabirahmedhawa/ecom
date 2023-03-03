<?php
// MAIL_DRIVER=smtp
// MAIL_HOST=smtp.gmail.com
// MAIL_PORT=587
// MAIL_USERNAME="jainildarji007@gmail.com"
// MAIL_PASSWORD="brfhnosrrnigiopb"
// MAIL_ENCRYPTION=tls
// MAIL_FROM_ADDRESS="jainildarji007@gmail.com"



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.PHP';
// require 'PHPMailerAutoload.php';

$Title=$_GET['Name'];
$Email=$_GET['Email'];
$fname=$_GET['fname'];
// $image=$_GET['image'];
$path='C:/xampp/htdocs/ecom_tast/react/prop/public/images/';
$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jainildarji007@gmail.com';                 // SMTP username
$mail->Password = 'brfhnosrrnigiopb';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'jainildarji007@gmail.com';
$mail->FromName = 'Sapphire Mart';
$mail->addAddress($Email, 'customer');     // Add a recipient
// $mail->addAddress('ellen@example.com');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
$mail->addCC('kabirahmed.hawawala.sapphire@gmail.com');
$mail->Port=587;
// $mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
// $mail->addAttachment($path.$image);                   // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'enquire to buy '.$Title;
$mail->Body    = 'Thank You for Enquire we will contact you shortly <b>'.$fname.'</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
    echo $Email;
    header("Location: http://localhost:3000/home?enquire=true");
}

?>