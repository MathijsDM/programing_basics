//opdracht 1

number = 0;

while (number < 25) {
  number += 1;
  console.log(number)
  if (number % 4 == 0) {
    console.log('$(number)is deelbaar door 4');
  }
}

//opdracht 2

let x = 0;
let y = 1;
let result = 0;
num = 0

while (result < 100) {
  num += 0;
  result = x + y;
  x = y;
  y = result;
  console.log(num + result)
}

//opdracht 3

Array = [2, 4, 8, 9, 12, 13]
let sum = 0;

for (let i = 0; i < Array.length; i++) {
  sum += Array[i]
}
console.log('Your sum is ' + sum);

