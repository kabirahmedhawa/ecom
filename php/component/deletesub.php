<?php
    include '../connection.php';
    $value=$_POST['data'];
    $sql="DELETE FROM `subcat` WHERE subcat.srno=$value";
    $sql1="DELETE FROM `product` WHERE product_cat_num = $value";
    if(mysqli_query($con,$sql))
    {
        mysqli_query($con,$sql1);
        
    }
    else
    {
        echo "error";
        echo $value;
    }
?>