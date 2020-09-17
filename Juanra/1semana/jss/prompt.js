window.onload=function(){
    console.log("Aplication started")
    let resp_prompt =window.prompt("Name of the subject","");
    console.log(resp_prompt);

    if(resp_prompt==="Client"){
        window.alert("The best");
    }else{
        window.alert("Not the best");
    }
    
}