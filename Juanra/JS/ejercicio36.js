window.onload=function(){
    // 1

        var linea = document.getElementById("container").innerHTML+="";
        var Hello="hello ";
        document.getElementById("container").innerHTML=Hello+linea;

    // 2
        var world = "world";
        document.querySelector("#container").innerHTML=Hello+world+linea;
    // 3

        document.getElementsByClassName("second")[0].style.fontWeight = "bold";
        document.getElementsByClassName("second")[1].style.fontWeight = "bold";
    // 4
         document.getElementsByClassName("third")[1].style.fontStyle = "italic";
    // 5
        var footer = document.querySelector(".footer");
        footer.classList.add("main");
    // 6
        var footer = document.querySelector(".footer");
        footer.classList.remove("main");
    // 7

        var nuevoLi = document.createElement("li");
    // 8

        nuevoLi.innerText = "four"
    // 9
        var list = document.querySelector("ul");
        list.appendChild(nuevoLi);
    // 10
        var liInsideOl = document.querySelectorAll("ol li");
        for(var i = 0; i < liInsideOl.length; i++){
            liInsideOl[i].style.backgroundColor = "green";
        }
    //11
    
     var footer = document.querySelector(".footer");
     footer.remove();
  }
        
   
   



// 36- Dado el archivo HTML  lists.html  escribe el código necesario para hacer lo siguiente:

// Seleccione la  sección  con el  contenedor de id   sin usar  querySelector  y escriba el texto "Hola" en él.
// Seleccione la  sección  con  el  contenedor de  id  usando  querySelector  y agregue el texto "World" en él.
// Seleccione todos los elementos de la lista con una  clase  nombrada en  segundo lugar  y ponga el texto en negrita.
// Seleccione un elemento de la lista con una  clase  llamada  tercera , pero solo en la lista ordenada y póngalo en cursiva.
// Agregue una  clase  llamada  main  al  div  con la  clase  llamada  footer .
// Elimine la  clase  principal  en el  div  con  la  clase  llamada  pie de página .
// Crea un nuevo  elemento li  .
// Dale al  li  el texto "cuatro".
// Agregue el  li  al  elemento ul  .
// Lazo sobre todo de la  li s  dentro del  ol  etiqueta y darles un color de fondo de "verde".
// Elimina el  div  con la  clase  llamada  pie de página .