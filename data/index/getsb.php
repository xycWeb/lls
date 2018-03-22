<?php
//data/index/getFloor2.php
//header("Content-Type:application/json");
require_once("../init.php");
@$cc=$_REQUEST['cc'];
@$cz=$_REQUEST['cz'];
@$wq=$_REQUEST['wq'];
@$gn=$_REQUEST['gn'];
@$bd=$_REQUEST['bd'];
@$bp=$_REQUEST['bp'];
@$zdbjfg=$_REQUEST['zdbjfg'];
@$xlid=$_REQUEST['xlid'];
$xyc='';
if($cc!=null){
	$xyc=$xyc.'xqcc='."'$cc'"." AND ";
}
if($cz!=null){
	$xyc=$xyc.'xqcz='."'$cz'"." AND ";
}
if($wq!=null){
	$xyc=$xyc.'xqwq='."'$wq'"." AND ";
}
if($gn!=null){
	$xyc=$xyc.'xqgn='."'$gn'"." AND ";
}
if($bd!=null){
	$xyc=$xyc.'xqbd='."'$bd'"." AND ";
}
if($bp!=null){
	$xyc=$xyc.'xqbp='."'$bp'"." AND ";
}
if($zdbjfg!=null){
	$xyc=$xyc.'xqzdbjfg='."'$zdbjfg'"." AND ";
}
if($xlid!=null){
	$xyc=$xyc.'xlid='."'$xlid'"." AND ";
}
$xyc=substr($xyc,0,-5);
if($xyc!=""){
	$sql="SELECT * FROM xqxlb where $xyc";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}else{
	$sql="SELECT * FROM xqxlb";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}