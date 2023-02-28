<?php
include '../connection.php';
$value=$_POST['data'];
$sql="SELECT * FROM `category` WHERE category.category_Number=".$value."";
$result=mysqli_query($con,$sql);


while($row=mysqli_fetch_assoc($result)){
    $data= "<label>CATEGORY:</label>
    <input type='text' id='new_name' name='' value='".$row['category']."' id='category' class='form-control' placeholder='CATEGORY TO ADD'>";

}
echo $data;
?>