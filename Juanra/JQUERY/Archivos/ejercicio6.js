$(document).ready(function() {

    

    // Cambia todo el contenido de "li" con el texto "Reglas de Batman".
    
    var r = $('<p>Reglas de Bartan</p>');
    console.log($(".avengers li").html(r));




    // Modifica el enlace "a" para visitar la página de wikipedia de Batman.

    console.log($("a").attr("href","https://en.wikipedia.org/wiki/Badman"));
  
    // Asigne un atributo "alt" a la imagen.

    $("img").attr("alt","Alt Asignado");

    // Modifique la "fuente" y el "alt" de la imagen a la vez.

    $("img").attr("alt","Alt Cambiado").attr("src","../2.jpg");


    // Elimina el atributo "alt".

    $("img").removeAttr("alt");
    
})