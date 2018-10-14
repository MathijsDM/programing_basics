// om te testen of js geladen is
window.addEventListener('load', init);

function init() {
    //addeventlistener
    const button = document.getElementById('submit');
    button.addEventListener('click', clickEventHandler);

    // klik op plaatje
    const pictureButton = document.getElementById('clickPicture');
    pictureButton.addEventListener('click', clickEventHandler);

    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', clickEventHandler);

}

function clickEventHandler(event) {
    // if (event.target.nodeName == 'IMG') {
    //console.log(event.target.nodeName);
    //}
    event.preventDefault();
    
    const inputText = document.getElementById('textInput').value;
    if (inputText == '') {
        console.log('please enter some info');
    } else {
        writeToDom(inputText);
    }
    console.log(inputText);
}

function writeToDom(newText) {
    /**
     * 1. Waar in het DOM //getElementById
     * 2. Welke element <li>tekst uit invoerveld</li> //createElement
     * 3. toevoegen aan plek in het DOM. //appendChild
     */

    //1
    const placeInDom = document.getElementById('results');
    //2
    const li = document.createElement('li');
    li.innerText = newText;
    //3
    placeInDom.appendChild(li);
}


