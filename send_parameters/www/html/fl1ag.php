<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST</title>
</head>
<body>
    
<h1>请用POST方式提交一个名为b,值为2的变量</h1>

<?php
error_reporting(0);
if(!isset($_POST[b])){
    die();
}
if($_POST[b] === '2'){
    echo 'QLNU{dadie_vme_me_50}';
}
?>

</body>
</html>