window.onload=function(){
    console.log("Aplication started")
    let resp_prompt =window.prompt("Name of a Fruit","");
    console.log(resp_prompt);

    switch (resp_prompt) {
        case 'Orange':
          console.log('I am not a fan or orange.');
          break;
        case 'Apple':
          console.log('Oh really, do you like apples.');
          break;
        case 'Bananas':
          console.log('Banna is good.');
          break;

        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + resp_prompt + '.');
      }
}
    