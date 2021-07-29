<?php 


ob_start();
require 'system/function.php';
require 'system/db.php';








// Basit Router işlemi
if(get("url")){
    
    $controller = ger("url");
    
}else{
    $controller = "home";
}

$controller = "app/".$controller.".php";
echo $controller;
 
ob_end_flush();   //deletes the topmost outputs and buffer;

?>