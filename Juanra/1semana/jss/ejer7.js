window.onload=function(){
    console.log("Aplication Started");
    let resp_confirm= window.confirm("Vas a aprobar el curso en febrero?");
    console.log(resp_confirm);

    if (resp_confirm===true) {
        window.alert("Good luck");
      } 
}
