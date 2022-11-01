<?php
$file_path = "../flag";
if(file_exists($file_path)){
    $fp = fopen($file_path,"r");
    $str = fread($fp,filesize($file_path));
    $flag = str_replace("\r\n","<br />",$str);
}

highlight_file(__FILE__);

if(isset($_GET['num'])){
    $num = $_GET['num'];
    if(preg_match("/[0-9]/", $num)){
        die("不是这样纸滴!");
    }
    if(intval($num)){
        echo $flag;
    }
}
