console.error('hij doet het');
const firstName = "Mathijs";
const lastname = "de Moor";
const age = 21;

console.log("Hallo, ik ben " + firstName + + lastname + "en ik ben" + age + "jaar oud")

const priceOfAnApple = '0.59';
const numberOfApples = 200;
let totalPriceOFApples = priceOfAnApple * numberOfApples
console.log(totalpriceOfAnApple);

const HZ = `please visit the HZ University of applied science`
console.log(HZ.replace("applied", "mad"));



let currentAction =  'calculating';

if ( currentAction == 'calculating'){
    console.log('in calculating')
    //optellen
    //vermenigvuldigen
    //aftrekken
    //delen
    const a = 10;
    const b = 11;
    console.log('optellen', a + b)
    console.log('vermenigvuldigen', a * b)
    console.log('aftrekken', a - b)
    console.log('delen', a/b)
}
else if(currentAction == 'strings'){
    console.log('in strings');
    const myString = 'My beautiful string';
    console.log(myString.toUpperCase());
    console.log('character at', myString.charAt(7));
    console.log('lengte van de string', myString.length);
    console.log('substring', myString.substring(3, 8));    
}
else if(currentAction == 'booleans'){
    console.log('in booleans');
    let score = 7;
    if(score >= 6){
        console.log('master');    
    }
    else{
        console.log('not');
    }
    //punten hoog genoeg --> if else?
}
else{ 
console.error('help!');
}

const gewicht = 78
const lengte = 1.81
const BMI = (gewicht / (legnte*legnte)*10)/10; 

if(BMI <18.5){
    console.log('ondergewicht');
    console.log('laag risico');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('normaal gewicht');
    console.log('gemiddeld risico');
}
else if(BMI >= 25 && BMI <= 29.9 ){
    console.log('overgewicht');
    console.log('verhoogd risico');
}
else if(BMI >= 30){
    console.log('obesitas');   
    console.log('duidelijk verhoogd risico');
}    

else{
    console.error('error');
}
