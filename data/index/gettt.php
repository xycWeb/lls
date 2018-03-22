<?php
//data/index/getFloor2.php
//header("Content-Type:application/json");
require_once("../init.php");
@$xqid=$_REQUEST['xqid'];
$sql="SELECT * FROM da WHERE xqid=$xqid";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));