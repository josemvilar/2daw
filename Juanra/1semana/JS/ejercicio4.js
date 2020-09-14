    window.onload= function(){
     

        var nombre = ["Juanra","Lola","Lorenzo","Lorenzo","Mariluz","Maria Jose"];
        var respuesta = prompt("Write the teacher's name","");
        var comprobacion = false;

        for(var valor1 of nombre){ 

        if (valor1 == respuesta.toUpperCase() || respuesta.toLowerCase()) {
            comprobacion = true;
        }
       
    }
       if (comprobacion = true){
          window.alert("Name Found");
      }else if(respuesta == ""){
          window.alert("Write a name");
      }else{
        window.alert(respuesta + " is not a current teacher");
    }

   
}

