//opdracht 1

let x = 0, y = 1, result = 0

function number(result){

while (result < 100) {
  result = x + y;
  x = y;
  y = result;
}
return result;
}
console.log(number(result));

//opdracht 2

function countdownstart(year){
  let timer = 10;
  let interval = setInterval(countdown, 1000, year)

  function countdown(year){
    if (timer > 0){
      console.log(timer)
      timer--
    }
    else if (timer == 0){
      console.log(`happy ${year}!`)
      clearInterval(interval)
    }
  }
}

countdownstart(2018)

//opdracht 3

function hoisting() {
  console.log(declaration)//print undefined uit
  var declaration;//de declaratie van 'declaration'

  console.log(expression)//print undefined uit
  var expression = 'hello'; // de declaratie van 'expression', de string 'hello'wordt hieraan toegewezen
  console.log(expression)//print hello uit

  //var expression wordt gehoist
  //expression = 'hello' niet
  // de line wordt als het ware opgesplitst in 2 delen
  //alleen een var laat zicht hoisten, een let niet 
}