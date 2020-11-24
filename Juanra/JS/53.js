window.onload=function(){
    names=["Daredevil","Jessica Jones","Lucas Cage","Iron Fist"];
    let f=document.createElement("form");
    f.setAttribute("action","Ejer52-54.html");
    f.setAttribute("method","post");
    for (let i = 0; i < names.length; i++) {


        let lb=document.createElement("label");
        let cb=document.createElement("input");
        cb.setAttribute("name",i);
        lb.setAttribute("for",i);
        cb.setAttribute("type","checkbox");
        lb.innerText=names[i];
        f.appendChild(cb);  
        f.appendChild(lb);

        
    }
    document.body.appendChild(f);

    let cbs=document.querySelectorAll("input");
    let found=0;
    for (let i = 0; i < cbs.length; i++) {
        cbs[i].onclick=function(){
            if (cbs[i].checked==true) {
                found+=parseInt(1);
            }else{
                found-=parseInt(1);
            }  
           
            if(found==4){
                form.style.visibility="visible";
            }else{
                form.style.visibility="hidden";
            }
        }
    }

    // 53- Inserta algunas casillas de verificación y como valores usa Daredevil, Jessica Jones, Lucas Cage y Iron fist. Si el usuario los selecciona todos, haga aparecer una lista desplegable con los valores Defensores, Superman, Batman. 


    
    

    let form=document.createElement("form");
    form.setAttribute("action","Ejer52-54.html");
    form.setAttribute("method","post");
    naux=["Defenders","SuperMan ","Batman"];
    let select=document.createElement("select");
    for (let i = 0; i < naux.length ; i++) {

        let opc=document.createElement("option");
        opc.innerText=naux[i];
        select.appendChild(opc);
        
    }
    form.appendChild(select);
    document.body.appendChild(form);
    form.style.visibility="hidden";

    
}