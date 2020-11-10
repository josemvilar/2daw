window.onload = function(){
    console.log("hola mundo");


    // funcion random
    
  function rand(n){
      return(Math.floor(Math.random() * n + 1));
  }
 // array
  var imagen = new Array();
  imagen[0] = "../img/dino.png";
  imagen[1] = "../img/images.png";
  imagen[2] = "../img/logo.png";
  imagen[3] = "../img/mario.png";


  function cambiar(){
      document.getElementById("img").src= imagen[rand(4)-1];
  }

  cambiar();
}
