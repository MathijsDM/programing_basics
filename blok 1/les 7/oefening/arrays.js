//oefenig 1

//array declaration
const productslist = [];

// array manier 1
productslist[0] = 'tandenborstel';
productslist[1] = 'deodorant';
productslist[2] = 'bakmeel';
productslist[3] = 'wortels'
productslist[4] = 'tandpasta';
productslist[5] = 'krop sla';
productslist[6] = 'maggi';
productslist[7] = 'crocky chips';
productslist[8] = 'wc papier';
productslist[9] = 'shampoo';

//verandert crocky chips in lays chips
productslist[7] = 'lays chips';

//.push voegt een element toe
productslist.push("snoep");

console.table(productslist);

//array manier 2
const products = [
    'tandenborstel',
    'deodorant',
    'bakmeel',
    'wortels',
    'tandpasta',
    'krop sla',
    'maggi',
    'crocky chips',
    'wc papier',
    'shampoo',
]

//.pop verwijdert het laatste element van de array
products.pop();

console.table(products);

//oefening 2

//forEach array met betrekking op products van oefening 1
products.forEach(function (elem, index, myArray) {

    console.log('element', elem);
    //console.log('index', index);
    //console.log('array', myArray);
});

//oefing 3

//for loop array met betrekking op products van oefening 1
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(`op index: ${index} staat element: ${element}`);
}

//oefeing 4

//map function om elements te veranderen in grote letters
let newProductsArray = products.map(function (element, index, array) {
    let newElement = element.toUpperCase();
    return newElement;
});

console.table(newProductsArray);

//oefeing 5

//map function om een 'product en nummer'toetevoegen aan het begin van het product
let newProductArrays = products.map(function (element, index) {
    const newElement = `product ${index + 1}: ${element}`;
    return newElement;
});

console.table(newProductArrays);

//oefening 6 

//for loop met het zelfde resultaat als een map function
let newProductArray = [];

for (let index = 0; index < products.length; index++) {
    const element = 'product' + index + ':' + products[index];
    newProductArray.push(element);
}

console.table(newProductArray);

//oefeing 7 

//array met function en for loop (array bij elkaar optellen)

const productprijzen = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

const sum = function (productprijzen) {
    let sum = 0;
    for (let i = 0; i < productprijzen.length; i++) {
        sum = sum + productprijzen[i]
        //average = sum / 9;
    }
    return sum;
}


console.log(sum(productprijzen));
//console.log('gemiddelde productprijs ' + average);

//array met function en for loop (array gemiddelde)

const average = function (productprijzen) {
    let newAverage = sum(productprijzen) / productprijzen.length;
    return newAverage;
    
}

console.log(average(productprijzen));
