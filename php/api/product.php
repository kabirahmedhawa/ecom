<?php
include '../connection.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $sql="SELECT * FROM `product` WHERE product.product_cat_num=".$id."";
        $result=mysqli_query($con,$sql);
        if($result){
        $output=$result->fetch_all(MYSQLI_ASSOC);
        // $image = json_encode(explode(",",$output['image']));
        // $images=explode(",",$output['image']);
        // echo $image;
        $api=json_encode(['status'=>true,'data'=>$output]);
        foreach($output as $key=>$value){
            
            $output[$key]['image']=explode(",",$output[$key]['image']);
        }
        // $output[0]['image'] = explode(",",$output[0]['image']);
        echo json_encode(['status'=>true,'data'=>$output]);

        }
        else{
            echo json_encode(['status'=>true,'msg'=>'No data found']);
        }
}
else{
    $srno=$_GET['srno'];
    
    $sql="SELECT * FROM `product` WHERE product.srno=".$srno."";
    
    $result=mysqli_query($con,$sql);
    if($result){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    // $image = json_encode(explode(",",$output['image']));
    // $images=explode(",",$output['image']);
    // echo $image;
    $api=json_encode(['status'=>true,'data'=>$output]);
    $output[0]['image'] = explode(",",$output[0]['image']);
    echo json_encode(['status'=>true,'data'=>$output]);

    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found']);
    }
}


    
    

    
    

?>