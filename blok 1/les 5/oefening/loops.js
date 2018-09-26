//oefening 1
number = 0;

while (number < 10) {
	number += 1;
	console.log(number)
}

//oefening 2

const sentenceExercise = 'het is maandag';
var i = 0;

while ( i<sentenceExercise.length){
	i++;
	console.log(sentenceExercise.charAt(i));
}

//oefening 3

const Word = 'mathijs';
let reversedWord = '';
let count = Word.length;

while (count >= 0) {
	reversedWord = reversedWord + Word.charAt(count - 1);
	console.log(reversedWord);
	count--;
}

//oefening 4
var message = 'Het is maandag';


for (var i = 0; i < message.length; i++) {
	console.log(message.charAt(i));
}

//oefening 5

for (let getal = 1 ; getal <= 10; getal++) {
	console.log(getal)
}

//oefening 6

for (let i = 1; i <=25; i++) {
	if(i % 3== 0){
		console.log(i + '$(i)is deelbaar door 3');	
	}
	else{
		console.log(i + '$(i)niet deelbaar door 3');
	}
}


