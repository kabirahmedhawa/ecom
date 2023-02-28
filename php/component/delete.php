<?php
    include '../connection.php';
    $value=$_POST['data'];
    $sql="DELETE FROM `category` WHERE `category`.`category_Number`=$value";
    $sql1="DELETE FROM `subcat` WHERE subcat.category_id=$value";
    $sql2="DELETE FROM `product` WHERE product.category_id=$value";
    if(mysqli_query($con,$sql))
    {
        if(mysqli_query($con,$sql1)){
            mysqli_query($con,$sql2);
        }
        
    }
    else
    {
        echo "error";
        echo $value;
    }
?>