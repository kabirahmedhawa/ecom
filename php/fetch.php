<?php

$name=$_POST['name'];
$url="http://localhost/ecom_tast/PHP/api/category.php?name=".$name."";
$ch=curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
$result=curl_exec($ch);
curl_close($ch);
$result=json_decode($result,true);
if(isset($result['status'])){
    if($result['status']==true){
        if($result['data']==true){
            ?>
            <table>
                <tr>
                    
                    <th>srno</th>
                    <th>category</th>
                    <th>category number</th>

                </tr>
                <?php
                foreach($result['data'] as $list){
                    echo "<tr>";
                    echo "<td>".$list['srno']."</td>";
                    echo "<td>".$list['category']."</td>";
                    echo "<td>".$list['category_Number']."</td>";
                    echo "</tr>";
                }
                ?>
        </table>

            <?php
        }
    }
    else{
        echo $result['data'];

    }
}
else{
    echo "API not Working";
}

?>