<?php
include '../connection.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
$id=$_GET['id'];
if($id!=null){
$sql="SELECT * FROM `subcat` WHERE subcat.category_id=".$id."";
$result=mysqli_query($con,$sql);
    if($result){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['status'=>true,'data'=>$output]);
    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found','id'=>$id]);
    }

}
else{
    $sql="SELECT * FROM `subcat`";
    $result=mysqli_query($con,$sql);
    if($result)
    {
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['status'=>true,'data'=>$output]);
    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found','id'=>$id]);
    }
}

// haa but me atyare function use nai kariu confuse thai jaise ok taru output dekhdne
?>