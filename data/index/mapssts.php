<?php
header("Content-Type:application/json");
require_once("../inittwo.php");
$getssts=$_REQUEST['getssts'];
if($getssts!=null){
	$sql="SELECT * FROM wzb where wzdw regexp '$getssts'";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}else{
	echo "请给我数据";
}