window.onload=function(){


    var fruit = prompt("Write a fruit","");

    switch (fruit) {
        case "banana":
            window.alert("Banana is good");
            break;

            case "orange":
                window.alert("I'm not a fan or orange");
                break;

                
            case "apple":
                window.alert("Oh really, do you like apples?");
                break;

            
        default:
            window.alert("Okay...");

            break;
    }


}