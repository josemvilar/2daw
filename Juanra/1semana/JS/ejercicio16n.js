window.onload = function(){

    function avarage(...args){

        if(args.length===0){
            alert("Array vacio");
        }else{
            let suma = 0;
            let acumulado=0;
            let total=0;

            for (let i=0;i<=args.length-1;i++){
                acumulado = args[i];
                suma = suma + acumulado;
                total = suma/args.length;
            }
            alert(total);
        }
    }



    console.log("Aplicacion iniciada");
    average(10,0,20);
}








//16 - Create a function named average that gets as parameters a variable 
//number of values and calculate the average of them. 
//Returns the average and undefined if the number of parameters where 0. 

//16 - Crea una función llamada promedio que obtiene como parámetros una variable
// número de valores y calcular el promedio de ellos.
// Devuelve el promedio e indefinido si el número de parámetros es 0.