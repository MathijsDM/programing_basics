//oefening

//getElementById
const ulList = document.getElementById('shopingList').innerText;
console.log(ulList);

//get first element
const firstItem = document.getElementById('item1');
console.log(firstItem);

//first element color
firstItem.classList.add('color');

//add Element to The DOM

//1. plek in de DOM (waar?)
const ph = document.getElementById('shopingList');

//2 creeer het element (wat?)
const newListItem = document.createElement('li');
newListItem.innerText = 'krop sla';

//3. voeg het element in op zijn plek in de DOM (plaats)
ph.appendChild(newListItem);

//groceryList opdracht

const groceryList = [
    {
        product: "tandenborstel",
        prijs: 2.50,

    },
    {
        product: "deodorant",
        prijs: 3.65,
    },
    {
        product: "bakmeel",
        prijs: 1.45,
    },
    {
        product: "wortels",
        prijs: 2,
    },
    {
        product: "krop sla",
        prijs: 1.85
    }

]
console.table(groceryList);

createMyTable();
function createMyTable() {

    /** dit is hoe een tabel is opgebouwd 
     * table
     *      tr
     *        td
     *           tandenborstel
     *        td
     *           2.50
     */

    /* plaatst een enkel element van de tabel in html
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.innerText = 'tandenborstel';
    const tdPrice = document.createElement('td');
    tdPrice.innerText = '2.50';

    tr.appendChild(tdName);
    tr.appendChild(tdPrice)
    table.appendChild(tr);

    const body = document.getElementById('body');
    body.appendChild(table); 
    */

    // plaatst de hele tabel in html
    const table = document.createElement('table');
    for (let i = 0; i < groceryList.length; i++) {

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = groceryList[i].product;
        const tdPrice = document.createElement('td');
        tdPrice.innerText = groceryList[i].prijs;

        tr.appendChild(tdName);
        tr.appendChild(tdPrice)
        table.appendChild(tr);
    }

    const body = document.getElementById('body');
    body.appendChild(table);
}



