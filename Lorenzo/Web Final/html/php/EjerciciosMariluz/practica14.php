<html>
    
 <body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
    Nom: <input type="text" name="nom">
    <input type="submit">
    </form>
    <?php

    if (isset($_POST['nom'])) {
    $nom=$_POST['nom'];
    echo "Me llamo ".$nom;
    }
    ?>
 </body>
</html>