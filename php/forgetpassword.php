<?php
include './connection.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.PHP';
 if(isset($_POST['data'])) 
 {          
            $email=$_POST['data'];
            $sql="SELECT * FROM users where Email='$email'";
            $result=mysqli_query($con,$sql);
            if($result){
                $output=$result->fetch_all(MYSQLI_ASSOC);
                if(!empty( $output )){
                
                
            // MAIL_DRIVER=smtp
            // MAIL_HOST=smtp.gmail.com
            // MAIL_PORT=587
            // MAIL_USERNAME="jainildarji007@gmail.com"
            // MAIL_PASSWORD="brfhnosrrnigiopb"
            // MAIL_ENCRYPTION=tls
            // MAIL_FROM_ADDRESS="jainildarji007@gmail.com"




            // require 'PHPMailerAutoload.php';

            $otp=rand(100000,999999);


            $mail = new PHPMailer;

            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'jainildarji007@gmail.com';                 // SMTP username
            $mail->Password = 'brfhnosrrnigiopb';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

            $mail->From = 'jainildarji007@gmail.com';
            $mail->FromName = 'Sapphire Mart';
            $mail->addAddress($email, 'password');     // Add a recipient
            // $mail->addAddress('ellen@example.com');               // Name is optional
            // $mail->addReplyTo('info@example.com', 'Information');
            $mail->addCC('kabirahmed.hawawala.sapphire@gmail.com');
            $mail->Port=587;
            // $mail->addBCC('bcc@example.com');

            $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
            // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
            $mail->isHTML(true);                                  // Set email format to HTML

            $mail->Subject = 'OTP Sapphire Mart';
            $mail->Body    = 'OTP to reset your password is <b>'.$otp.'</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            if(!$mail->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
                echo $otp;
            }


                }
            }
        }
        elseif(isset($_POST['password'])){
          
            $email=$_POST['email'];
           
            $password=$_POST['password'];
            $password= base64_encode($password);
            
            $sql="UPDATE users SET password='$password' where Email='$email'";
            
            if(mysqli_query($con,$sql)){
                echo 'true';
                echo $password;
                echo $email;
            }
        }
?>