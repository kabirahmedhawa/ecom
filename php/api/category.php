<?php
include '../connection.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
// $name=$_GET["name"];
//WHERE category.category='$name'
// if(isset($_POST['submit']))
// {
    //$name=$_POST['name'];
    $sql="SELECT * FROM `category` ";
    $result=mysqli_query($con,$sql);
    if($result){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['status'=>true,'data'=>$output]);
    }
    else{
        echo json_encode(['status'=>true,'msg'=>'No data found']);
    }

// }
// else{
//     echo "Invalid Input";
// }

// while($row=mysqli_fetch_assoc($result)){
//     // $data="{"
//     //     . $row['category'].":{".
//     //         "id:".$row['srno'].",".
//     //         "category_number:".$row['category_Number'].
//     //         "}".
        
//     //     "}" ;


//     $data->
// }
?>