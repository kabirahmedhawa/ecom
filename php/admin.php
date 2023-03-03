<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
</head>
<body>


<div class="error"></div>

<?php
include './connection.php';
 $login=FALSE;
 if(isset($_POST['submit']))
 {
     $email=$_POST['email'];
     $password=$_POST['password'];
     $uppercase = preg_match('@[A-Z]@', $password);
     $lowercase = preg_match('@[a-z]@', $password);
     $number    = preg_match('@[0-9]@', $password);
     $specialChars = preg_match('@[^\w]@', $password);
     
     if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 6) {
        header("Location: http://localhost:3000/sign-in?login=false");
     }
     else{
        $password= base64_encode($password);
     }
     
 }

 $sql="SELECT * FROM users where Email='$email' AND password='$password'";
 echo $sql;
 $result=mysqli_query($con,$sql);
 if($result)
 {
while($row=mysqli_fetch_assoc($result))
{
    echo '<pre>';
    print_r($row['Email']);
   
 if( $email==$row['Email'])
 {
    print_r($row['Email']);
    print_r($row['password']);
    echo $password;
     if($password===$row['password'])
     {
        if($row['privilege']=='admin'){
            header("Location: http://localhost:3000/admin/category?login=".$row['Email']."&fname=".$row['First Name']."&id=".$row['srno']);
            $login=TRUE;
        }
        else{
            echo 'yes';
            header("Location: http://localhost:3000/home?login=".$row['Email']."&fname=".$row['First Name']."&id=".$row['srno']);
            $login=TRUE;
        }
        //   
     }
 }
}
}

 else{
    header("Location: http://localhost:3000/sign-in?login=false");
}
    if($login){
       echo "done";
    }
    else{
        header("Location: http://localhost:3000/sign-in?wrong=true");
    }
?>
  
</body>
</html>

