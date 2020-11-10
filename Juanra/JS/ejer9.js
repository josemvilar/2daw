window.onload=function(){
    console.log("hola mundo");
        
        let pregunta=this.prompt("Dime una Contrasena", )
        this.console.log(pregunta)


        if(pregunta === "DAW"){
            alert("Hola Alumno DAW");
            var fecha = new Date();
            alert("Hora: "+fecha.getHours()+"\nMinuto: "+fecha.getMinutes()+"\nSegundo: "+fecha.getSeconds()+"\nMilisegundo: "+fecha.getMilliseconds());


         } else{
            alert("Contrasena incorrecta");
        }

        }