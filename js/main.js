/*********************
Setting up varlaibles*
**********************/

let result;
let calculation;
let num1;
let num2;


/*****************************************
Function for numbers to display on screen*
******************************************/

function buttonPress(numbers) {

    result = document.querySelector('.answer');
    let input=result.innerHTML += numbers
    console.log(input)

    if(input.length >= 21)
    {
        
        result.innerHTML += "\n";
        document.querySelector('.answer').style.marginTop = "-1rem";
    }
}
