<?php
require('init.php');
@$iid = $_REQUEST["iid"];
$sql = "SELECT title,subTitle,abstract,href FROM nav_item Where iid = $iid";
if(mysqli_error($conn)){
   		echo mysqli_error($conn);
 	}
$output = [];
$result = mysqli_query($conn,$sql);
$output["nav"] = mysqli_fetch_row($result);
$sql = "SELECT cid,series,illustrate,img,href FROM header_content Where iid = $iid";
$result = mysqli_query($conn,$sql);
$output["data"]=mysqli_fetch_all($result,1);
echo json_encode($output);



 	
?>