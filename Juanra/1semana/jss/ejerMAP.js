 //Using the following array 
// ["1SMR","2SMR","1DAW","2DAW","1GA","2GA"] create a program
// to add the text "SOLVAM" at the end of each element of the
// array. Is mandatory to use the map function.


function texto(x){
    return x + " SOLVAM";
}
let array = ["1SMR","2SMR","1DAW","2DAW","1GA","2GA"];
let newArray = array.map(texto);
console.log(newArray);