// 1. Maak een clicker game
let count = 0;

//look for click on button
const button = document.getElementById('button');
button.addEventListener('click', clickEventHandler);

//create space for counter
const counter = document.getElementById('counter');
const p = document.createElement('p');
counter.appendChild(p);
p.id = 'countNum';
p.innerText = count;

function clickEventHandler(event) {
    event.preventDefault();
    console.log('dit werkt');
    count++;
    console.log(count);

    //overwritte counter with new count
    p.innerHTML = count;

    if(count == 10 && count < 20) {
        button.style.width = '85px';
        button.style.height = '85px';
    } else if(count == 20 && count < 30) {
        button.style.width = '60px';
        button.style.height = '60px';
    } else if(count == 30 && count < 40) {
        button.style.width = '35px';
        button.style.height = '35px';
    }
}