<?php
 	require("init.php");
 	$sql = 'SELECT nid,title FROM nav';
 	if(mysqli_error($conn)){
   		echo mysqli_error($conn);
 	}
	$output = [];

 	$result = mysqli_query($conn,$sql);
 	$nav = mysqli_fetch_all($result,1);
	$output["nav"] = $nav;
	$len = count($nav);
	$data = [];
	for($i=0;$i<$len;$i++){
		$nid = $nav[$i]['nid'];
		$sql = "SELECT iid,title,href FROM nav_item Where nid = $nid";
		$result = mysqli_query($conn,$sql);
 		$rows = mysqli_fetch_all($result,1);
 		$data[]=$rows;
	}
 	$output["data"] = $data;
 	//发送json字符串
 	echo json_encode($output);
?>