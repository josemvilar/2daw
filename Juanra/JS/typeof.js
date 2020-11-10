window.onload = function(){

    function maximo(...args){
        let maxValue = null;

        for( let value of args){
            if(!maxValue || value > maxValue){
                maxValue = value;
            }
            console.log( typeof(maxValue) );

            return maxValue;
        }
    }
console.log(maximo(5,1,89));
console.log(maximo(89,23,-102,0));
console.log( typeof(maximo) );

}
// // -Puedo guardar una cadena de texto en una variable? Si Num: Si
// //  Guardar una funcion a una variable, se llamara funcion anonima.
// //  Funciones flecha: let x= (param1,param2,para3) => { 
//     return param1 + param2}; 
//     console.log ( x(1,2,3));
