<?php
    include '../connection.php';
    $category=$_POST['category'];
    $id=$_POST['id'];
    $sql="INSERT INTO `subcat`( `Name`, `category_id`) VALUES ('$category','$id')";
    if(mysqli_query($con,$sql)){
        
    }
    else{
        echo "Failed to insert subcategory";
    }
?>