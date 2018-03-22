<?php
header("Content-Type:application/json");
require_once("./init.php");
@$key=$_REQUEST['key'];


if($key!=""){
	$sql="SELECT * FROM xqxlb where xqname regexp '$key' or xqcc regexp '$key' or xqcz regexp '$key' or xqwq regexp '$key' or xqgn regexp '$key' or xqbd regexp '$key' or xqbp regexp '$key' or xqzdbjfg regexp '$key' or xqhm regexp '$key'or xlid regexp '$key'";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}
