

<html>
    <head>
        <title>Hola Mon</title>  
    
    </head>

    <body>
    <?php

    $numeros=array();
    $num=10;
        for ($x=0;$x<$num;$x++) {
            $numerosAleatorios=rand(1,9);
            array_push($numeros,$numerosAleatorios); 
           
        }
        print_r(array_sum($numeros));
 
        echo json_encode($numeros);
 ?>
 <br>
 <?php
        
?>
    </body>



</html>