//opdracht 1

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function random_item(lapRounds) {

    return lapRounds[Math.floor(Math.random() * lapRounds.length)];

}

console.log(random_item(lapRounds));

//opdracht 2

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]];

for (let index = 0; index < allMyRecords.length; index++) {


    for (let i = 0; i < allMyRecords[index].length; i++) {
        const element = allMyRecords[index][i];

        console.log(element);
    }

}

//opdracht 3

Rounds([2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]);

function Rounds(lapRounds) {
    let filteredRounds = lapRounds.filter(function (lapRounds) {
        return lapRounds < 4
    });
    console.log(filteredRounds)
}
