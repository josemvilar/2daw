<html>
    <head>
        <title>Hola mundo</title>
    </head>
 <body>
    <?php 
       function aniversari(){
            global $edat;
            $edat +=1;
       }
        $edat=30; 
        aniversari();
        echo $edat;

       
    ?>
 </body>
</html>