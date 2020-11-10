<head>



</head>
<body>
<form action="#" method="post">	
<select name="cursos">		
<option value="php y mysql">php y mysql
</option>	
<option value="framework codeigniter">framework codeigniter
</option>
		<option value="wordpress">wordpress
        </option>		
        <option value="ajax">ajax
        </option>	
        </select>	
        <input type="submit">
        </form>
        
        <?php
            echo $_POST['cursos'];

         ?>
        </body>




</html>