window.onload=function(){
    console.log("Aplication started")
    let resp_prompt =window.prompt("Kind of Fruit","");
    console.log(resp_prompt);

    if(resp_prompt==="Banana"){
        window.alert("I like bananas");
    }else if (resp_prompt==="Apple") {
        window.alert("I like Apples");
    }else{
        window.alert("I dont like fruits");
    }

    
}