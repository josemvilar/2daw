<head>



</head>
<body>
<form action="#" method="post">
Precio de las entradas: 5€
<br>
Cuantas entradas quieres:
<select name="entradas">
    <option value=1>1</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5</option>
    <option value=6>6</option>
    <option value=7>7</option>
    <option value=8>8</option>
    <option value=9>9</option>
    <option value=10>10</option>
</select>
<br>
<input type="submit" id="Enviar" value="Calcular" name="Calcular" />
<br>
<br>

</form>
    <?php
         $entradas=$_POST['entradas'];
            if($entradas==8){
                echo (($entradas*5)*0.85);
            }else if($entradas==5){
                echo (($entradas*5)*0.9);
            }else if($entradas==10){
                echo (($entradas*5)*0.80);
            }else if($entradas==1 || $entradas==2 || $entradas==3 || $entradas==4 || $entradas==6 || $entradas==7 || $entradas==9){
                echo($entradas*5);
            }
        
            
    ?>

            
</body>




</html>