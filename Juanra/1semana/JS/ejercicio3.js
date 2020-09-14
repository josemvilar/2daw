window.onload= function(){
   

    let num1 = [1,2,3,4,5,6,7,8,9,10];
    let num2 = [1,2,3,4,5,6,7,8,9,10];


    for(let value1 of num1){
        console.log("Tablas del " +value1);

        for(let value2 of num2){
            console.log(value1 + " x " + value2 + "= " + value1*value2 );
        }
    }



}