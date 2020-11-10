window.onload=function(){
    var dni = {
        0: "T",
        1: "R",
        2: "W",
        3: "A",
        4: "G",
        5: "M",
        6: "Y",
        7: "F",
        8: "P",
        9: "D",
        10: "X",
        11: "B",
        12: "N",
        13: "J",
        14: "Z",
        15: "S",
        16: "Q",
        17: "V",
        18: "H",
        19: "L",
        20: "C",
        21: "K",
        22: "E"

    };
    var numeros = window.prompt("Escribe tu dni sin letra, y te calcularemos la letra.", "");
    
    if (numeros > 0 || numeros < 99999999) {
        letra = numeros%23;
        console.log(dni[letra]);
        total = dni[letra];
        alert(numeros+total);

      }else{
          console.log("Esto no va");
      }
    

}


// 31. Lea un número DNI de un mensaje y use un objeto para buscar la letra que lo acompaña. 
// La letra proviene de un cálculo y una lista de letras.
// Busque en Internet para encontrar el cálculo necesario y la lista de letras.