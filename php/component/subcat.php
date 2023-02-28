<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>subcat</title>
</head>
<body>
    
</body>
</html>

<?php
    include '../connection.php';
    $value=$_POST['data'];
    $data="";
    
    $sql="SELECT * FROM `subcat` WHERE subcat.category_id=".$value."";
    $result=mysqli_query($con,$sql);
    $data=
        '
        <table class="table table-bordered table-striped">
        <tr>
        <th>SrNo</th>
        <th>Category</th>
        <th>Action</th>
        </tr>';

    
    if(mysqli_num_rows($result)>0)
    {
        $number=1;
        while($row=mysqli_fetch_assoc($result))
        {
            $data.='
            <tr>
            <td>'.$number.'</td>
            <td>'.$row['Name'].'</td>
            <td><button class="btn btn-primary edit" onClick="fetchSub(event)" id="'.$row['Name'].'" value='.$row['srno'].' data-toggle="modal" data-target="#edit">change '.$row['Name'].'</button>
            <button class="btn btn-danger delete" onClick="deletesub(event)" value='.$row['srno'].'>Delete '.$row['Name'].'</button></td>
            </tr>';
            $number++;
        }
        $data.='</table>';
    }

    echo $data;

?>