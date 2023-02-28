<?php
include '../connection.php';
$value=$_POST['data'];
$srno=$_POST['id'];
// echo "<pre>";
// print_r($_POST);die;
$sql="UPDATE `category` SET `category`='$value' WHERE category.category_Number=$srno";
if(mysqli_query($con,$sql)){
    ?>
    <script>console.log("done")</script>

    <?php

}
else{
    echo("Error description: " . $sql -> error);
    ?>
    <script>console.log("error")</script>

    <?php
    echo $srno;
}
?>