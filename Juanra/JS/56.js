window.onload=function(){
    let input=document.querySelector("#btn");
    input.onclick=validar();
    function validar(){
        
        let name=document.querySelector("#register_name");
        let surname=document.querySelector("#register_surname");
        let email=document.querySelector("#register_email");
        let passwd=document.querySelector("#register_password");
        let comments=document.querySelector("#register_comments");

        name.onblur=function(){
            if (name.value.trim()=="") {
                name.setCustomValidity("No puedes dejarlo vacio");
                name.reportValidity();
            }
        }
        email.onblur=function(){
            if(email.value.includes("@")){
                let arr=email.value.split("@");
                if (arr[1].includes(".")) {
                    return true;
                }
            }else{
                email.setCustomValidity("Email NO Válido");
                email.reportValidity();
            }
            
        }
        comments.onblur=function(){
            if(comments.value.length>50){
                comments.setCustomValidity("Max. 50 letras");
                comments.reportValidity();
            }
        }
        
        name.required=true;
        email.required=true;
        comments.required=true;
        comments.setAttribute("maxlenght",50);

        
        

        passwd.onblur=function(){
            let c1=false;let c2=false;
            let c3=false;let c4=false;
            for (let i = 0; i < passwd.value.length; i++) {
                if(passwd.value.length>=6){
                    c3=true;
                    
                }
                if((passwd.value.charCodeAt(i)>=65 && passwd.value.charCodeAt(i)<=90)){
                    c1=true;
                }else if((passwd.value.charCodeAt(i)>=97 && passwd.value.charCodeAt(i)<=122)){
                    c4=true;
                }else if(passwd.value.charCodeAt(i) >= 48 && passwd.value.charCodeAt(i) <= 57){
                    c2=true; 
                }
                
            }
            if(!(c1 && c2 && c3 && c4)){
                passwd.setCustomValidity("The password must be at least 6 characters long, and contain at least one lowercase, one uppercase, and one digit.");
                passwd.reportValidity();
            }
        }
        
        



        
    }
    
}

// 56- Dado el archivo HTML  registration_form.html  construya un validador para el formulario de registro. Debe validar cada campo cuando el usuario haya terminado de ingresar datos en él, es decir, después de perder el foco. Si el campo no cumple con las restricciones, se mostrará una alerta al usuario, pero se le permitirá continuar ingresando datos en el resto de los campos.

// Cuando el usuario envía el formulario (enviar evento), todos los campos se validarán y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:

// Nombre, correo electrónico y comentarios son campos obligatorios.
// El correo electrónico debe ser una dirección de correo electrónico válida.
// El texto ingresado en el campo de comentario no debe exceder los 50 caracteres.
// La contraseña debe tener al menos 6 caracteres y contener al menos una minúscula, una mayúscula y un dígito.
