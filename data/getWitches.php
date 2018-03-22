<?php
require_once('init.php');
@$iid = $_REQUEST["iid"];
$sql = "SELECT title,subTitle,abstract,href FROM nav_item Where iid = $iid";
if(mysqli_error($conn)){
   		echo mysqli_error($conn);
 	}
$output = [];
$result = mysqli_query($conn,$sql);
$output["nav"] = mysqli_fetch_row($result);

$sql = "SELECT xlid,xlname FROM xlb";
$result = mysqli_query($conn,$sql);
$xl = mysqli_fetch_all($result,1);
$output["xl"] = $xl;

$len = count($xl);
$data = [];
for($i=0;$i<$len;$i++){
	$xlid = $xl[$i]["xlid"];
	$sql = "select xqid,xqname,xqimg,max(xqhm) from xqxlb Where xlid = $xlid group by xqhm";
	$result = mysqli_query($conn,$sql);
	$data[] = mysqli_fetch_all($result,1);
};
$output["data"] = $data;
echo json_encode($output);
?>