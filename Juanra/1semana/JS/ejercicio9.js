window.onload=function(){


    var pass = prompt("What's ur password?","");
    var hoy = new Date();
    var fecha = hoy.getDay() +"-"+ hoy.getMonth() + "-" + hoy.getFullYear();
  
    if (pass==="daw") {
    window.alert("Hello Daw Pupil "+fecha);        
    }else{
        window.alert("Access Denied");
    }

}




// Create a program that ask you a password. If the password is "daw", 
// show an alert with the message "Hello DAW pupil" and with the hour of the system.
//  If it's not correct, show the message "Access denied".