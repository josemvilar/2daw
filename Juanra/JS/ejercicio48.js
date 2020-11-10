window.onload = function(){

    var boton1 = document.getElementById('boton1');
    var boton2 = document.getElementById('boton2');

    var ventana;

    boton1.onclick = function() {

        ventana = window.open("","","width=100,height=100,toolbar=yes");

        ventana.document.body.style.background="red";
    }

    boton2.onclick = function() {

        ventana.resizeTo("250","250");
        ventana.focus();
    }

}