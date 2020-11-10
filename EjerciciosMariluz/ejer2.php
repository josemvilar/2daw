<html>
    <head>
        <title>Hola Mon</title>  
    
    </head>

    <body>
    <?php
    $cap=array("España"=>"Madrid", "Francia"=>"París", "Inglaterra"=>"Londres", "Italia"=>"Roma", "Portugal"=>"Lisboa", "Alemania"=>"Berlín"); 
    $cap2=array("España"=>"Madrid", "Francia"=>"París", "Inglaterra"=>"Londres", "Italia"=>"Roma", "Portugal"=>"Lisboa", "Alemania"=>"Berlín"); 
    
    for ($i=0; $i < count($cap) ; $i++) 
    { 
        if ($cap[$i]==$cap2[$i]) {
             echo "Son iguales"; 
            break; 
        }else{ echo "No son iguales"; } 
             } 
    ?>
    
    </body>



</html>