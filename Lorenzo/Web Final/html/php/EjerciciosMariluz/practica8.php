<head>



</head>
<body>
<form action="#" method="get">
Primer numero:
<br>
<input type="text" id="sum1" name="sum1" />
<br>
Segundo Numero:
<br>
<input type="text" id="sum2" name="sum2" />
<br>
<input type="submit" id="Enviar" value="Submit" name="Enviar" />
<br>

</form>
    <?php
        function suma($sum1,$sum2){
            global $sum;
            $sum=$sum1 + $sum2;
          return $sum;
        }
        $sum1=$_GET['sum1'];
        $sum2=$_GET['sum2'];
    
       $entrada=suma($sum1,$sum2);
        echo "la suma de ".$sum1."+".$sum2." es: ".$entrada;
    
    ?>


</body>




</html>