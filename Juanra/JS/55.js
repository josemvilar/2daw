window.onload=function(){
    let f=document.createElement("form");
    f.setAttribute("action","Ejer52-55.html");
    f.setAttribute("method","post");

    let passwd=document.createElement("input");
    passwd.setAttribute("type","password");

    f.appendChild(passwd);
    document.body.appendChild(f);

    let p=document.createElement("p");
    document.body.appendChild(p);
   

    let c1=false;
    let c2=false;
    let c3=false;
    
    passwd.onkeypress=function(){
        p.style.visibility="hidden";
    
        for (let i = 0; i < passwd.value.length; i++) {
           
            if((passwd.value.charCodeAt(i)>=65 && passwd.value.charCodeAt(i)<=90)||(passwd.value.charCodeAt(i)>=97 && passwd.value.charCodeAt(i)<=122)){
                c1=true;
             
            }else if(passwd.value.charCodeAt(i) >= 48 && passwd.value.charCodeAt(i) <= 57){
                c2 = true; 
            }else{
                c3 = true;
            }
            
        }
        if(c1 && c2 && c3){
            p.innerText="strong";
        }else if(c1 && c2){
            p.innerText="medium";
        }else{
            p.innerText="low";
        }
        p.style.visibility="visible";
            
        
    }
}


// 55- Use un texto de entrada para verificar la fuerza de la contraseña. Muestre a la derecha un texto diferente si la seguridad de la contraseña es baja, media o alta. Siga estas reglas:

// Solo letras o solo números - bajo
// Letras y números - medio
// Letras, números y símbolos - alto