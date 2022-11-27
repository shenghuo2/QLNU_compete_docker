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

</head>
<body>
<form action="login.php" method="post">
    <input type="text" name="A" maxlength="7">
    <input type="submit">
</form>
<!--输入qlnuyyds得到hint-->
<div>怎样才能获得hint呢？仔细找找</div>
</body>
</html>

