window.onload = function(){

  
    var notas = [['Programacion', 6], ['Web', 5], ['Cliente', 7.4], ['Servidor', 4], ['Interfaz', 8]];
    var media = 0;

    for (var i=0; i < notas.length; i++) {
        media += notas[i][1];
        var resultado = (media/notas.length);
        }


        console.log("Average grade: " + (media)/notas.length);
                
        if (resultado < 2){
        console.log("Muy deficiente");      
        } 
        else if (resultado < 5) {
                console.log("Insuficiente"); 
                } 
        else if (resultado < 6) 
            {
                console.log("Suficiente"); 
        } else if (resultado < 7) {
                console.log("Bien");

        } else if (resultado < 9) {
                console.log("Notable"); 

        }else if (resultado > 9) {
                console.log("Sobresaliente"); 

        }
     
    }



//Write a JavaScript program which compute the average marks of the students in a class. 
//Then, this average is used to determine the corresponding grade:

// Muy deficiente: <2
// Insuficiente: <5
// Suficiente: <6
// Bien: <7
// Notable: <9
// Sobresaliente: from 9 on.