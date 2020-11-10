<html>
    <head>
        <title>Suma global</title>
    </head>
 <body>
    <?php 
       function sumadiff( $suma1, $suma2){
            global $suma;
            $suma=$suma1+$suma2;
       }
        sumadiff(3,5);
        echo "La suma es ".$suma."";

       
    ?>
 </body>
</html>