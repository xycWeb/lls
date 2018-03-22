<?php
header("Content-Type:application/json");
require_once("../inittwo.php");
$getMap=$_REQUEST['getMap'];
if($getMap!=null){
	$sql="SELECT * FROM wzb where wzdw regexp '$getMap'";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}else{
	echo "请给我数据";
}