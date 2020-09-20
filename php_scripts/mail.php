<?php 
    $mail = file_get_contents('php://input');
    $mail = json_decode($mail);
    
        foreach($mail as $value){
            $file = "mails.txt";
            file_put_contents($file, "[ MAIL ]"." $value\n" ,FILE_APPEND );
        }

?>