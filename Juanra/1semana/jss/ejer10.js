window.onload=function(){
    console.log("Bienvenido a e-commerce");
        
        let salario=this.prompt("Cuanto te has gastado", );
        this.console.log("Te has gastado " +salario);

        if (salario < 25.34){
            alert("Eres Usuariuo Standard");
        }else if (salario >= 25.34 && salario < 57.16){
            alert("eres usuario de Bronce");
        }else if (salario >= 57.16 && salario < 68.04){
            alert("eres usuario de Plata");
        }else if (salario >= 68.04){
            alert("eres usuario de Oro");
    }
    console.log("Muchas Gracias por su compra")
}   