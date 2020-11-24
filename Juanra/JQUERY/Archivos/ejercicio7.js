$(document).ready(function(){
    console.log("Funciona");
    
    var aveng = $(".avengers li");
    // Agregue "Black Widow" al final del "li".

    
    $("Black Widow").insertAfter(aveng);

     $(".avengers li").insertAfter("Black Widow");

    // Agregue "Red Widow" al comienzo del "li".

    $("Red Widow").insertAfter("li");


    // Mueve el primer elemento "li" después de "Capitán América".

    $(".avengers li:first").insertBefore("li:eq('Capitán América')");

    // Copie el texto del título de la página "h1" en el primer "li".



    // Agrega un nuevo "li" con tu propio vengador antes de Thor.
    

})

