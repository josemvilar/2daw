<html>
    <head>
        <title>Hola Mondo</title>  
    
    </head>

    <body>
    <?php

    $var = rand(1,10);
    echo $var;

    if($var<5){
        echo "  Has suspendido"; 
     }else if($var >=5 && $var <6){
         echo " Suficiente";
     }else if($var ===6){
        echo " Bien";
     }else if($var >=7 && $var <9){
        echo " Notable";
     }else if($var >=9){
        echo " Sobresaliente";
     }

    ?>
    </body>



</html>