<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        window.oncontextmenu = function(){return false};
        window.onselectstart = function(){return false};
        window.onkeydown = function(){if (event.keyCode==123){event.keyCode=0;event.returnValue=false;}};
    </script>
</html>
<?php
$a = setcookie('user','0',time()+300);
if($_POST['A']=='qlnuyyds'){
        echo '去试试吆三零吆点皮爱吃皮吧';
    }
else{
    echo '你输入的不对哦';
}


