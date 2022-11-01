<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get</title>
</head>
<body>
    
<h1>请用GET方式提交一个名为a,值为1的变量</h1>

<?php
error_reporting(0);
if(!isset($_GET[a])){
    die();
}
if($_GET[a] === '1'){
    echo '/fl1ag.php';
}
?>

</body>
</html>