<html>
    <head>
        <title>Hola mundo</title>
    </head>
 <body>
    <?php 
       function aniversari(){
            static $edat;
            $edat +=1;
            echo $edat;
       }
        $edat=30; 
        aniversari();
        aniversari();
        echo $edat;

       
    ?>
 </body>
</html>