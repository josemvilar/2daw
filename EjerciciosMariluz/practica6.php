<html>
    <head>
        <title>Suma</title>
    </head>
 <body>
    <?php 
       function suma( $suma1, $suma2){
            return $suma1+$suma2;
            
       }
        $suma1=10;$suma2=10;
        $suma3=suma($suma1,$suma2);
        echo "La suma de ".$suma1." + ".$suma2." es ".$suma3;

       
    ?>
 </body>
</html>