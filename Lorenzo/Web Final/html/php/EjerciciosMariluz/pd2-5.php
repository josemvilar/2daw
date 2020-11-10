<head>



</head>
<body>
<form action="#" method="post">
Dime un numero y te digo si es par o no:
<br>
<input type="text" id="num1" name="num1" value="" />
<br>
<input type="submit" id="Enviar" value="Submit" name="Enviar" />
<br>

</form>
    <?php
    
        $num1=$_POST['num1'];
        
        if ($num1%2==0){
            echo "El numero " .$num1." es par";
        }else{
            echo "El numero " .$num1." es impar";
        }
    
    ?>


</body>




</html>