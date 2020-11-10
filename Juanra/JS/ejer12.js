window.onload=function(){
    console.log("Intrpduce un numero y te dire si es par o es impar");

    var numero = prompt("Introduce un numero");
    console.log("El numero introducides es " +numero);

    var resultado = isOdd(numero);

    alert(resultado);

    console.log(resultado);

    console.log("Adios");

        function isOdd(numero) {
            if(numero % 2 == 0) {
                return "false";
            }
            else {
                return "true";
            }
        }   
}