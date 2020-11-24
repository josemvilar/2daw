window.onload = function(){
    console.log("Aplication started");

      
    document.getElementById("h1").innerHTML="Mi lista de libros";
     
    var libroA = new Array();
        titulo[0]= String;
        autor[1]= String;
        yaRead[2]= Boolean;


        var libroA = {
            "titulo": "La Aventura",
            "autor": "Yo",
            "tails": false,
            "yaRead": Boolean;
            
            };


            
}

// 49- Crea una aplicación para realizar un seguimiento de qué libro ya leíste y qué libros quieres leer.

// Cree una página web con el texto "Mi lista de libros" en un  h1elemento.
// Cree una matriz de objetos, donde cada objeto describe un libro y tiene propiedades para el título (cadena), 
// autor (cadena) y yaRead (booleano que indica si ya lo leyó).
// Repite entre la variedad de libros. 
// Para cada libro, cree un  p elemento con el título y el autor del libro y añádalo a la página. El texto debería ser como: "El Hobbit de JRR Tolkien".
// Cambia cada  pelemento en función de si ya lo has leído o no. Si lo ha leído, muestre un mensaje como 'Ya leíste "El Hobbit" de JRR Tolkien', y si no, muestra un mensaje como
//  'Aún necesitas leer "El Señor de los Anillos" de JRR Tolkien'.