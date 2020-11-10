window.onload = function () {


    let salida = '';


    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= i; j++) {
            salida += j + '';
        }


        
        for (let j = i; j <= 6; j++) {
            salida += "*";
        }


        console.log(salida);
        salida = '';
}
}