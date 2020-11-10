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
<br>
<input type="submit" id="Enviar" value="Submit" name="Enviar" />
<br>
<br>

</form>
    <?php
    
        $num1=$_POST['num1'];
        $num2=$_POST['num2'];
    
        if($num1<$num2){
            echo "De menor a mayor " .$num1." , ".$num2;
        }else if($num1>$num2){
            echo "De mayor a menor: " .$num1." , ".$num2; 
        }
    
    
    ?>


</body>




</html>