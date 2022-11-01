<?php 
error_reporting(E_ALL^E_WARNING);
header("Content-type: text/html; charset=utf-8");
$file_path = "../flag";
if(file_exists($file_path)){
$fp = fopen($file_path,"r");
$str = fread($fp,filesize($file_path));
$flag = str_replace("\r\n","<br />",$str);
}

$b='<?php 
if (isset($_GET["x"]) and isset($_GET["y"])) {
    if ($_GET["x"]!= $_GET["y"])
    if (md5($_GET["x"]) === md5($_GET["y"]))
    echo "$flag";
    else
    print "Wrong.";
    }
?>
';

$v=highlight_string($b,true);
echo $v;

if (isset($_GET['x']) and isset($_GET['y'])) {
    if ($_GET['x']!= $_GET['y'])
    if (md5($_GET['x']) === md5($_GET['y']))
    echo $flag;
    else
    print 'Wrong.';
    }
?>
