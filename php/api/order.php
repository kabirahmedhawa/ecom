<?php
 include '../connection.php';
 header("Access-Control-Allow-Origin: http://localhost:3000");


 
 if(isset($_GET['userid']))
 {
 $userid=$_GET['userid'];
 $sql= "SELECT * FROM payment_orders WHERE user_srno='$userid'";
 $result=mysqli_query($con,$sql);
    
 if($result){
 $output=$result->fetch_all(MYSQLI_ASSOC);
 echo json_encode(['status'=>true,'data'=>$output]);
 }
 else{
     echo json_encode(['status'=>true,'msg'=>'No data found']);
 }
}



else{
    $sql= "SELECT * FROM payment_orders";
    $result=mysqli_query($con,$sql);
       
    if($result){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['status'=>true,'data'=>$output]);
    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found']);
    }
}
 ?>