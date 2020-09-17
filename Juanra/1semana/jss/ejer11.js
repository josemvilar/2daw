window.onload=function(){
    console.log("Intrpduce un numero y te dire si es par o es impar");

    var numero = prompt("Introduce un numero");
    console.log("El numero introducides es " +numero);

    var resultado = isIven(numero);

    alert(resultado);

    console.log(resultado);

    console.log("Adios");

        function isIven(numero) {
            if(numero % 2 == 0) {
                return "true";
            }
            else {
                return "false";
            }
        }   
}