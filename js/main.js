/*********************
Setting up varlaibles*
**********************/

let char, result = '';

/***********************************
Add Event Listener for calculation*
***********************************/


document.querySelectorAll('button').forEach(button=> {  // add click event to all button
    button.addEventListener('click', (e)=> {
      char = e.target.textContent;
      if (char == '=') {

        let values = result.split(/([-+\/\*])/);
        for (let i = 0; i < values.length; i++) {
          if (isNaN(values[i])) {
            let operator = values[i]
            i++;
            let nextNumber = parseFloat(values[i])
            result = operations[operator](result, nextNumber)
          } else {
            result = parseFloat(values[i])
          }
        }
      } else if (char == 'C') {
        result = '';
      } else {
        result += char;
      }
      document.querySelector('.answer').textContent = result
    })
  })

  let operations ={
      '+': (a, b) => a + b,
      '-':(a, b) => a - b,
      '*':(a, b) => a * b,
      '/':(a, b) => a / b,
      '%':(a, b) => a % b,
  }