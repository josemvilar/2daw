window.onload = function(){
console.log("Iniciado");


    let = num = null;
    let ask = 0;

    while(ask !== -1){
        ask = parseInt(prompt("Insert a number."));
        if (ask===-1) {
            window.alert("Exit the promgram");
        } else if(ask >= 0){
            num += ask;
            console.log(num);
        }else{
            window.alert("Its not a positive number, repeat");
        }
    }
    window.alert("El Resulado es " + num);
    
}





// 6.- Write a program that ask you positive numbers (and sum it) with the following functions:
//     - Program finishes when a -1 is introduced.
//     - When the program finishes. show an alert with the total of all the numbers introduced.
//     - Check if the value introduced is a numeric value or not. If not, show an alert and ask for other number.
