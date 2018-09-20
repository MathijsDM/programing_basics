//oefening 1

const cijfer = 9.1;

if (cijfer < 6) {
    console.log('Onvoldoende');
}
else if (cijfer >= 6 && cijfer < 7) {
    console.log('Voldoende');
}
else if (cijfer >= 7 && cijfer < 9) {
    console.log('Goed');
}
else if (cijfer >= 9 && cijfer <= 10) {
    console.log('Uitmuntend');
}

else {
    console.error('error');
}

//oefening 2

switch (punt = 7) {
    case 0:
        console.log('Onvoldoende');
        break;
    case 1:
        console.log('Onvoldoende');
        break;
    case 2:
        console.log('Onvoldoende');
        break;
    case 3:
        console.log('Onvoldoende');
        break;
    case 4:
        console.log('Onvoldoende');
        break;
    case 5:
        console.log('Onvoldoende');
        break;
    case 6:
        console.log('Voldoende');
        break;
    case 7:
        console.log('Voldoende');
        break;
    case 8:
        console.log('Goed');
        break;
    case 9:
        console.log('Uitmuntend');
        break;
    case 10:
        console.log('Uitmuntend');
        break;
    default:
        console.log('Error');
}

// oefening 3

let purchasedBook = true;
let job = 'teacher';
let inTrain = true

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log('finally i can enjoy my book!')
}
else if (purchasedBook == true && job == 'teacher' && inTrain !== true) {
    console.log('I have a book but i am not in the train')
}
else if (purchasedBook !== true && job == 'teacher' && inTrain == true) {
    console.log('I need to buy a book so i can read in the train')
}
else if (purchasedBook !== true && job == 'teacher' && inTrain !== true) {
    console.log('I dont have a book and i dont use the train')
}
else if (purchasedBook !== true && job !== 'teacher' && inTrain !== true) {
    console.log('I am not a teacher so i dont read and dont use the train')
}
else if (purchasedBook !== true && job !== 'teacher' && inTrain == true) {
    console.log('I use the train')
}
else if (purchasedBook == true && job !== 'teacher' && inTrain !== true) {
    console.log('I have purchased a book')
}
else if (purchasedBook == true && job !== 'teacher' && inTrain == true) {
    console.log('I like to read in the train')
}
else {

}