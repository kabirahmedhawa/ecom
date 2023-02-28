<?php
include '../connection.php';
$value=$_POST['data'];
$sql="DELETE FROM `product` WHERE product.srno=$value";
    if(mysqli_query($con,$sql))
    {
        
        
    }
    else
    {
        echo "error"; 
        echo $value;
    }
?>