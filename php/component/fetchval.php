<?php
include '../connection.php';
$value=$_POST['data'];
$sql="SELECT * FROM `subcat` WHERE subcat.srno=".$value."";
$result=mysqli_query($con,$sql);

while($row=mysqli_fetch_assoc($result))
{
    $data= "<label>CATEGORY:</label>
    <input type='text' id='new_name' name='' value='".$row['Name']."' id='category' class='form-control' placeholder='CATEGORY TO ADD'>";
    
}
echo $data;
?>