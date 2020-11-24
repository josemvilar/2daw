window.onload=function(){
    let f=document.createElement("form");
    f.setAttribute("action","Ejer52-55.html");
    f.setAttribute("method","post");

    let txt=document.createElement("input");
    txt.setAttribute("type","text");

    f.appendChild(txt);
    document.body.appendChild(f);
    

    let p=document.createElement("p");
    document.body.appendChild(p);
    p.style.visibility="hidden";

    
    txt.onkeypress=function(){
        p.style.visibility="hidden";
        if(txt.value.includes("a") || txt.value.includes("d") || txt.value.includes("w")){
            let array=txt.value.split("");

            for (let i = 0; i < array.length; i++) {
                if(array[i]=="a" || array[i]=="d" || array[i]=="w"){
                    p.innerText="The letter "+array[i]+" is not allowed in this page";
                    array.splice(i,i);
                    txt.value="";
                    for (let a = 0; a < array.length; a++) {
                        txt.value+=array[a];
                        
                    }
                    p.style.visibility="visible";
                }
                
                
            }
           
            
            
        }
    }
}

// 54- Crea una página web con un texto de entrada usando JS. Cuando el usuario escribe una de las siguientes letras d, a, w en la entrada tiene que mostrar un mensaje en rojo justo debajo de la entrada: “La letra x no está permitida en esta página” y la letra no tiene que aparecer en la entrada. Otras letras tienen que aparecer como de costumbre y el mensaje tiene que desaparecer.