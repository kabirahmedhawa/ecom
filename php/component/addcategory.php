<?php
    include '../connection.php';
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $category=$_POST['category'];
    

    // $sql='CREATE TABLE ecom.'.$category.'
    // (srno int(255) PRIMARY KEY NOT NULL,
    // Product varchar(255) NOT NULL)';

    $sql2="SELECT `category_Number` FROM category ORDER BY `category_Number` DESC LIMIT 1";
    $results=mysqli_query($con,$sql2);
    $row=mysqli_fetch_assoc($results);
    // echo $row['category_Number'];
    $number=$row['category_Number'];
    
    $number++;



    $sql1="INSERT INTO `category`( `category`, `category_Number`) VALUES ('".$category."','".$number."')";
   if(mysqli_query($con,$sql1))
   {
    // echo "done";
    
    // if(mysqli_query($con,$sql))
    // {
    //     echo "done";
    // }
    // else{
    //     echo $sql;
    // }
    
   }




?>