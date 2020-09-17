window.onload = function(){
        
    function isLeapYear(year){
    
        for (var i = 1; i < year; i++){
            if (((year % 4 == 0) && (year % 100 != 0 )) || (year % 400 == 0)){
                
                return true;

            }else {
                return false;
            }
    }
    }
     
    var year = window.prompt("Write a year", "");
        var resultado = isLeapYear(year);
      console.log(resultado);

    if(resultado === true){
        window.alert("Is LeapYear");
    }else if(resultado === undefined){
        window.alert("Write something");

    }else{
        window.alert("It's not LeapYear")
    }

}

// 15 - Create a function named isLeapYear to determine if a year is leap or not.

