<html>
    <head>
        <title>Hola mundo</title>
    </head>
 <body>
    <?php 
       $dia=date("d"); //variable dia = estableix un valor a la variable
       if($dia<=10) { 
           echo "Lloc actiu"; //Si $dia es menor o igual que 10 mostrara per pantalla lloc actiu
        } 
        else {
            echo "Lloc fora de servici"; // si es major a 10 mostrara lloc fora de servici
        }
    ?>
 </body>
</html>