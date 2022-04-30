/*********************
Setting up varlaibles*
**********************/

let result;
let num1;
let num2;


/*****************************************
Function for numbers to display on screen*
******************************************/

function buttonPress(numbers) {

    let input = document.querySelector('.answer').innerText.split('\n').join('')+numbers
    let display = document.querySelector('.answer').innerHTML = input
    console.log(`${typeof display} ${display}`)

    if (display.length >= 21) {

      for (let i = 0; i < display.length; i++) {
        document.querySelector('.answer').style.marginTop = -i + "px";
      }
    }
  }

/***********************************
Function for calculation of numbers*
************************************/

function calculation(buttonPress){

    switch(numbers){
        case "/":
            numbers / numbers;
            break;
        case "*":
            numbers * numbers;
            break;
        case "+":
            numbers + numbers;
            break;
        case "-":
            numbers - numbers;
            break;
        case "%":
            numbers % numbers;
            break;     
            default:
    }
  
    buttonPress()
}


