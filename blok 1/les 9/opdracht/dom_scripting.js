//opdracht 1
const allGradeTableCells = document.getElementsByClassName('grade');
console.log(allGradeTableCells[0].innerText); 

let allGrades = [];
for (let index = 0; index < allGradeTableCells.length; index++) {
    allGrades.push(allGradeTableCells[index].innerText);
}
console.log(allGrades);

function avarageGrade(gradeArray) {
    sumOfGrades = 0;
    for (let index = 0; index < gradeArray.length; index++) {
        sumOfGrades += parseFloat(gradeArray[index]); 
    }
    return sumOfGrades / gradeArray.length;
}

console.log(avarageGrade(allGrades));

//opdracht 2

function changeBackground() {
    const table = document.getElementById('courses');
    const rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        if (i % 2 == 0) {
            rows[i].classList.add('even');
        }
    }
}
changeBackground();

//opdracht 3

function createImageElement(imageSrcName){
    // 1. waar in de dom
    const place = document.getElementById('body');
    // 2. wat moet er gemaakt worden
    const image = document.createElement('img');
    image.src = imageSrcName;
    image.alt = 'My beautifull image';
    // 3. plaats het in de dom
    place.appendChild(image);
}

createImageElement('83603-636216266356158373-16x9.jpg');