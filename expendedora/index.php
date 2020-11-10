<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Maquina Expendedora</title>
	<link rel="stylesheet" href="../expendedora/css/disenyo.css">

</head>


<body>


	<!-- Diseño tabla -->

	<h1> Maquina Expendedora </h1>

	<table border="1">

		<tr>

			<td><img class=prueba src="imagenes/cocacola.png" width="100" height="100"><br>Cocacola 2€</td>

			<td><img class=prueba src="imagenes/monster.png" width="100" height="100"><br>Monster 2€</td>

			<td><img class=prueba src="imagenes/agua.png" width="100" height="100"><br>Agua 2€</td>

		</tr>

		<tr>
			<td><img class=prueba src="imagenes/pipas.png" width="100" height="100"><br>Pipas 1.50€</td>

			<td><img class=prueba src="imagenes/chetos.png" width="100" height="100"><br>Cheetos 1.20€</td>

			<td><img class=prueba src="imagenes/doritos.png" width="100" height="100"><br>Doritos 1.30€</td>

		</tr>
		<tr>

			<td><img class=prueba src="imagenes/golosinas.png" width="100" height="100"><br>Golosinas 4€</td>

			<td><img class=prueba src="imagenes/gumblins.png" width="100" height="100"><br>Gumblins 1€</td>

			<td><img class=prueba src="imagenes/patatas.png" width="100" height="100"><br>Patatas 2€</td>

		</tr>
	</table>


	<?php
			//Array de objetos 

			$productos = array (

				"Cocacola" => 2,
				"Monster" => 2,
				"Agua" => 2,
				"Pipas" => 1.50,
				"Cheetos" => 1.20,
				"Doritos" => 1.30,
				"Golosinas" => 4,
				"Gumblins" => 1,
				"Patatas" => 2
			);
			?>

	<form action="index.php" method="post">
<br>
		<select name="item"> 
			<br>
			<option value=""><br>Seleccione un producto</option>

			<?php 
						
				foreach ($productos as $item => $cash) {?>

			<option value="<?php echo $item;?>">
				<?php echo $item;?>
				<?php echo $productos [$item];
					?> €
			</option>
			<?php
				}
				?>

		</select>
		<p>Introduzca el dinero necesario:<br>

			<input type="number" step="any" name="cash" /></p><br>
		<input type="submit" value="Pagar" /><br>
	</form>

	<div id="resultado">
		<?php

        //Asignacion de variables
				
			$cash = $_POST['cash'];
			$items = $_POST['item'];

			
			$vueltas = $cash - $productos[$items];
			$insuficiente = $productos[$items] - $cash;  

		// Resultados de la selección.
    
        foreach($productos as $item => $costo){
            if ($items == $item) {
                if ($cash > $costo ){
                    
					echo "Has comprado ".$item;
                    echo "<br> Devolucion: ".$vueltas."€ <br>";
					echo "Gracias por comprar en 24/7 <br>";
					
                }else if ($cash == $costo){ 
                    
                    echo "Has comprado ".$item;
					echo "<br> Gracias por comprar en 24/7 <br>";
					
                }else if ($cash < $costo){

                    echo "Falta " .$insuficiente."€";
			   
				}else{
					echo "Seleccione un producto";
				}
			}
        }
		?>
	</div>
</body>

</html>