$(document).ready(function() {

    //  Cambiar contenido
    
    var hola = "<i>Hola como estas?</i>";
    console.log($("p").html(hola));
    
    
    console.log($("p").html("<b>Hola</b>"));
    
    
        $("p#primero").attr("aling", "center");
        
        $("p").attr({
        style: "background-color:red",
        aling: "justify"
    
    }
});
    
   
    
    
