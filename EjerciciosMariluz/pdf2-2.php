<head>



</head>
<body>
<form action="#" method="post">
Primer numero:
<br>
<input type="text" id="num1" name="num1" value="" />
<br>
Segundo Numero:
<br>
<input type="text" id="num2" name="num2" value="" />
<br>
<input type="submit" id="Enviar" value="Submit" name="Enviar" />
<br>

</form>
    <?php
    
        $num1=$_POST['num1'];
        $num2=$_POST['num2'];
    
        if($num1<$num2){
        echo "El numero " .$num1." es mas pequeño que ".$num2;
        }else if($num1>$num2){
            echo "El numero " .$num1." es mas grande que ".$num2; 
        }
    
    
    ?>


</body>




</html>