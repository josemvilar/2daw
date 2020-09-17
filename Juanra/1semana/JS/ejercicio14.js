window.onload = function () {

    function isPrime(primo) {
        for (var i = 2; i < primo; i++) {

            if (primo % i === 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    let primo = window.prompt("Dime un numero", "");
    var resultado = isPrime(primo);

    
    if (resultado === true) {
        window.alert("El numero es primo");
    } else if(primo === "") {
        window.alert("Debes de escribir un numero");
    }else{
        window.alert("El numero no es primo");
    }




}

//14 - Create a function named isPrime to determine if a number is prime or not.