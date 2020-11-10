window.onload=function(){
      console.log("Aplication started");
      
      document.getElementById("h1").innerHTML="Bienvenido Usuario";

      
      window.addEventListener('load', iniciar, false);

      function iniciar() {
        
        var imagen = document.getElementById('imagen');
        
        imagen.addEventListener('mouseover', peligro, false);
        imagen.addEventListener('mouseout', restaurar, false);
      }
      
      function restaurar(){
        var imagen = document.getElementById('imagen').src = "/img/mario.png";
      }
      
      function peligro() {
        var imagen = document.getElementById('imagen').src = "/img/images.png";
      }
    }


// 46- Crea una página html con una imagen con las siguientes funciones:

//Cuando se cargue la página, cree con JavaScript un nuevo elemento h1 dando la bienvenida al nuevo usuario.
//Cuando el mouse esté sobre la imagen, cambie a otra imagen. Cuando esté fuera, vuelva a cargar la imagen original.
//Al hacer clic en la imagen, se muestra la siguiente alerta "¡¡Deja de hacer clic en mí !!"