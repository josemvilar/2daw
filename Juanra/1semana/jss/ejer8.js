window.onload=function() {
    console.log("Aplicacion iniciada");
    let frase=window.prompt("Dime una frase","");
    console.log(frase);

    var palabras = frase.split(" ");
    console.log(palabras);

    console.log("Numero de palabras " + palabras.length);
    

    console.log("La primera palabra es " + palabras[0]);

    console.log("La segunda palabra es " + palabras[palabras.length - 1]);

    console.log("La frase ordenada es " + palabras.sort());

    console.log("La frase desordenada es " + palabras.reverse());


}