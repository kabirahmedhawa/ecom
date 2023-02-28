<?php
    include '../connection.php';
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $sql='SELECT * from content ORDER BY srno DESC LIMIT 1';
    $result=mysqli_query($con,$sql);
    
    if($result){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['status'=>true,'data'=>$output]);
    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found']);
    }

?>