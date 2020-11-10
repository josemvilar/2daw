window.onload = function(){
    console.log("hola mundo");

    let listul = document.querySelector("ul");
    var nuevoLi = document.createElement("li");
    nuevoLi.innerText = "Soporte telefónico 365"

    listul.appendChild(nuevoLi);

      
}

// 37- Dado el archivo HTML  Prices.html  y el archivo CSS  Prices.css  escriba el código necesario para hacer lo siguiente:
// Se ha agregado una nueva función al  plan avanzado: 
// 'Soporte telefónico 365'. 
// Agregue esto usando JavaScript a la lista de características del  plan Avanzado.

// Para hacer el orden de los planes más lógico, 
// usando JavaScript, mueva el  plan Lite  para que esté antes (izquierda) del  plan Avanzado 
// Para resaltar el  plan avanzado  , 
// actualice el botón actual 'Sea un cliente' para que sea azul (# 005090) con texto blanco y tenga el texto 'Comenzar ahora' 
// Hay una oferta especial activa en este momento que ofrece un 50% más de almacenamiento en el  plan Lite  y un 25% más en el  plan Advanced  . 
// Actualice ambas tarjetas del plan para reflejar la nueva cantidad de almacenamiento que se ofrece.