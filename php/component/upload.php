<?php
include '../connection.php';


function reArrayFiles($file)
{
    $file_ary = array();
    $file_count = count($file['name']);
    $file_key = array_keys($file);
    
    for($i=0;$i<$file_count;$i++)
    {
        foreach($file_key as $val)
        {
            $file_ary[$i][$val] = $file[$val][$i];
        }
    }
    return $file_ary;
}




    $product=$_POST['product_name'];
    $description=$_POST['product_detail'];
    $category_id=$_GET['category_id'];
    $price=$_POST['product_price'];
    $path='C:/xampp/htdocs/ecom_tast/react/prop/public/images/';
    // $path=$path . basename($_FILES['input_file']['name']);
    $id=$_POST['product'];
    $product_cat=$_POST['product'];
    $allowTypes = array('jpg','png','jpeg','gif');
    $image=$_FILES['input_file'];
    $image_name=array();
    if(!empty($image))
    {
        echo "<pre>";
        $img_desc = reArrayFiles($image);
        print_r($img_desc);
        
        foreach($img_desc as $val)
        {
            $newname = date('YmdHis',time()).mt_rand().'.jpg';
            echo $newname;
            array_push($image_name,$newname);
            move_uploaded_file($val['tmp_name'], $path.$newname);
            
        }
    }
        // echo "<pre>";
        // print_r($image_name);
        
        $normal=implode(",",$image_name);
        $sqli="INSERT INTO `product`(`Title`, `Description`, `image`, `price`, `product_cat_num`, `category_id`) VALUES ('$product','$description','$normal','$price','$product_cat','$category_id')";
        $result=mysqli_query($con,$sqli);
        
        if($result){
            header("Location: http://localhost:3000/admin/product?id=".$id);
        }
        else{
            echo $result;
        }


?>