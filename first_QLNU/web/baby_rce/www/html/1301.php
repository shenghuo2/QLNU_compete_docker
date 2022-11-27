<?php
error_reporting(0);
if(isset($_POST["QLNU"])){
    if(preg_match('/nc|bash|curl|cat|ls|sh|ls|cat|system/i',$_POST["QLNU"])){
        show_source(__FILE__);
        echo "What do you want to do?";
    }else{
        shell_exec($_POST["QLNU"]);
    }
}else{
    show_source(__FILE__);
}