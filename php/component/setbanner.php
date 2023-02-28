<?php
include '../connection.php';
    $banner=$_POST['banner'];
    // The Largest Range of Products
    $ar=explode(' ', $banner);
    $lastword=array_pop($ar);
    $banner=implode(' ', $ar);
    $image=$_FILES['banner_image'];
    $path='C:/xampp/htdocs/ecom_tast/react/prop/public/images/';
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["banner_image"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    $sql='SELECT * from content ORDER BY srno DESC LIMIT 1';
    $result=mysqli_query($con,$sql);
    if($result)
    {
        $output=$result->fetch_all(MYSQLI_ASSOC);
        $images=$output[0]['image'];
    }
    unlink($path.$images);
    if(move_uploaded_file($image['tmp_name'], $path.'banner.'.$imageFileType)){
    $img_name='banner.'.$imageFileType;

    
    
    
    $sql="INSERT INTO `content` ( `banner_Title`, `banner_white_text`, `image`) VALUES ('$banner','$lastword','$img_name')";
    $result=mysqli_query($con,$sql);
    if($result){
        
        header("Location: http://localhost:3000/admin/setbanner");
    }

}
?>