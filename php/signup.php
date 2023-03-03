<?php
    include './connection.php';

    if(isset($_POST['signup']))
    {
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number    = preg_match('@[0-9]@', $password);
        $specialChars = preg_match('@[^\w]@', $password);
        
        if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 6) {
           header("Location: http://localhost:3000/sign-up?sign-up=false");
        }
        else{
           $password= base64_encode($password);
        
    
        $sql="INSERT INTO `users`(`First Name`, `Last Name`, `Email`, `password`) VALUES ('$fname','$lname','$email','$password')";
        echo $sql;
        if(mysqli_query($con,$sql)){
            header("Location: http://localhost:3000/sign-in?login=true");
        }
        else{
            echo "Error1";
        }
    }
}
    else{
        echo "Error";
    }
?>