<?php
error_reporting(0);
header("Content-type: text/html; charset=utf-8");
$file_path = "../flag";
if(file_exists($file_path)){
$fp = fopen($file_path,"r");
$str = fread($fp,filesize($file_path));
$flag = str_replace("\r\n","<br />",$str);
}
$b='<?php 
highlight_file(__FILE__);
$vme=$_GET["vme"];
if(!is_numeric($vme))
	{echo"疯狂星期四 v我50给你flag\n";
	if ($vme==50){
		echo $flag;
	}
	}
?>
';

$v=highlight_string($b,true);
echo $v;



$vme=$_GET['vme'];
if(!is_numeric($vme))
	{echo"疯狂星期四 v我50给你flag\n";
	if ($vme==50){
		echo $flag;
	}
	}
?>