window.onload=function(){
    console.log("Aplication started")
    
    let num = null;
    let pregunt_num=0;
     while(pregunt_num !== -1){
        pregunt_num = parseInt(prompt("Insert a number, if it is equals -1, the programe stop"));
            if(pregunt_num=== -1) {
                window.alert("Exit the program");
            } else if(pregunt_num>=0) {
                num += pregunt_num;
                console.log(num);
            }else {
                window.alert("its not a positive number, repeat");
            }
        }
            console.log("El resultado es " + num);
     }
