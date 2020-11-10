
window.onload=function(){
    console.log("Aplication started");
    
   
    let num1=[1,2,3,4,5,6,7,8,9,10];
    let num2=[1,2,3,4,5,6,7,8,9,10];

    for(let value of num1){
        for(let value2 of num2){
            console.log(value + "x" + value2 +"="+ value*value2 );
        }

    }
   
        
    } 