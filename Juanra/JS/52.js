window.onload=function(){
    let f=document.createElement("form");
    f.setAttribute("action","Ejer52-55.html");
    f.setAttribute("method","post");

    let i=document.createElement("input");
    i.setAttribute("type","text");

    let c=document.createElement("input");
    c.setAttribute("type","checkbox");

    let r=document.createElement("input");
    r.setAttribute("type","radio");

    r.style.visibility="hidden";

    f.appendChild(i);
    f.appendChild(c);
    f.appendChild(r);


    document.body.appendChild(f);

}

// 52- Cree un formulario con JavaScript con al menos una casilla de entrada, una casilla de verificación y un botón de opción. Los botones de radio estarán ocultos.

