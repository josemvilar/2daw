<html>
    <head>
        <title>Hola Mon</title>  
    
    </head>

    <body>
    <?php

    $total=0;
    while($total>10){
        $num = rand(1,10);
        echo "$num";
        if ($num == 2 || $num == 3 || $num == 5 || $num == 7) {
            echo "$total + $num";
            $total=$total+$num;
            echo "$total";
        }
    }
    ?>
    </body>



</html>