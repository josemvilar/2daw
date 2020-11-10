<head>



</head>
<body>
<form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
Que es lo que quieres:
<br>
<br>
    <input type="checkbox" name="formulario[]" value="fecha"> Mostrar fecha/hora en formato español<br>

    <input type="checkbox" name="formulario[]" value="primos"> Mostrar los números primos entre el 1 y 100, y la suma de ellos al final<br>

    <input type="checkbox" name="formulario[]" value="impares"> Mostrar los números impares entre el 1 y el 20, e indicar si la suma de ellos es par o impar
<br>
<br>
<input type="submit"  name="submit" />
<br>
<br>

</form>
    <?php
    if(isset($_POST['submit'])){
        $formulario=[];
        foreach($_POST['formulario'] as $value)
            array_push($formulario,$value);
        foreach($formulario as $value){
            switch ($value) {
                case 'fecha':
                    echo "Fecha: ". date("d/m/Y ") . date("G:i");
                break;
            case 'primos':
                    echo date;
                break;
                
        }
        }
}
        
            
    ?>

            
</body>




</html>