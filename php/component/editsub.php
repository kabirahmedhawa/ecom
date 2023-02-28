<?php
include '../connection.php';
$value=$_POST['data'];
$srno=$_POST['id'];
$sql="UPDATE `subcat` SET `Name`='$value' WHERE subcat.srno=$srno";
if(mysqli_query($con,$sql)){
    ?>
    <script>console.log("done")</script>

    <?php

}
else{
    ?>
    <script>console.log("error")</script>

    <?php
    echo $srno;
}
?>