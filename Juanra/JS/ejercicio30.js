window.onload=function(){
    var myHome = {
        "direccion": "Calle Lozano Lopez",
        "habitaciones": 4,
        "metros": 12,
        "extras": [""]
    };
    console.log(myHome.direccion,myHome.habitaciones,myHome.metros,myHome.extras);
    

    myHome.ascensor = false;

    console.log("Resultado de ascensor es: "+ myHome.ascensor);


    console.log("Los metros son: "+ myHome.metros);


    var metros = "metros";
    delete myHome[metros];
    
    console.log("Metros ha sido eliminado: "+ myHome.metros);


    if(myHome.hasOwnProperty("metros")){
        console.log("Metros existe");
    }else{
        console.log("Metros no existe");
    }

    console.log("Las habitaciones son: "+ myHome.habitaciones);

    if(myHome.hasOwnProperty("habitaciones")){
        console.log("La propiedad habitaciones existe");
    }else{
        console.log("La propiedad habitaciones no existe");
    }
}






// 30. Cree un objeto que represente una casa llamada myHome que contenga las propiedades "dirección" 
// (una cadena), "habitaciones", "metros" y "extras".

// Puede establecer estas propiedades de objeto en los valores que desee, siempre que "dirección" 
// sea una cadena, "habitaciones" y "metros" sean números y "extras" sea una matriz.
// Muestra el valor de cada propiedad con notación de puntos o corchetes.
// Agregue una nueva propiedad llamada "ascensor" y establézcala en verdadero o falso.
// Elimine la propiedad "metros".
// ¿Existe la propiedad "metros"? Descúbrelo dentro del código.
// ¿Y la propiedad de las "habitaciones"? Descúbrelo dentro del código.