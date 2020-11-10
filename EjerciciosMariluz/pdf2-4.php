 <html>
    <head>
        <title>Hola Mon</title>  
    
    </head>

    <body>
    <?php
    $suma=0;
    for ($x=0;$x<=100;$x++){
        if ($x%5==0){
            echo " ".$x;
            $suma+=$x;
        }
        echo $suma;
    }
    ?>
    </body>



</html>