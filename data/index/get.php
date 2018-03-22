<?php
//data/index/getFloor1.php
//header("Content-Type:application/json;charset=utf-8");
require_once("../init.php");
$sql="SELECT * FROM xlb";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));