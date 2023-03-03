<?php
 $servername='localhost';
 $username='root';
 $password1="";
 $database="ecom";
 $con = new mysqli($servername, $username, $password1, $database);
 // Check connection
 if ($con->connect_error) {
 die("Connection failed: " . $con->connect_error);
 }
?>