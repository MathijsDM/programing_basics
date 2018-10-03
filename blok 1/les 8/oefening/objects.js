//oefening 1, object

let me = {
    name: "mathijs",
    age: "21",
    previousDiploma: "mbo-4",
    flauw: [1, 2, 3,],
    vervoersmiddel: {
        name: "auto",
        wielen: 4,
    },
    namen: [
        'mathijs',
        'ron',
        'carla',
        'thomas',
        'nemo',
    ],
    logFavoriteVechile: function(){ 
        console.log(`mijn favoriete vervoersmiddel is een ${me.vervoersmiddel.name} en heeft ${me.vervoersmiddel.wielen} wielen`);
        },
    logFamNamen: function (){
            me.namen.forEach(function(element) {
                console.log(element)
            })
        }
}


console.log(me);

//oefening 2, een nieuwe property toevoegen
me.currentStudy = "HBO-ICT"
console.log(me);

//oefening 3, experimenten
me.experiment1 = "0.123, !@#, &*^%k"
console.log(me);
me.experiment2 = [1, 2, 3, 4, 5,]
console.log(me);
me.experiment3 = (45 / 3)
console.log(me);

console.log("mijn favoriete vervoersmiddel is een " + me.vervoersmiddel.name + " en heeft " + me.vervoersmiddel.wielen + " wielen ");

//of

//console.log(`mijn favoriete vervoersmiddel is een ${me.vervoersmiddel.name} en heeft ${me.vervoersmiddel.wielen} wielen`);

//loops om inhoud .namen object onder elkaar te krijgen
for (let i = 0; i < me.name.length; i++) {
    console.log(me.namen[i]);
    
}

me.namen.forEach(function(element) {
    console.log(element);
})

//oefening 4 

let logFavoriteVechile = function(){ 
    console.log(`mijn favoriete vervoersmiddel is een ${me.vervoersmiddel.name} en heeft ${me.vervoersmiddel.wielen} wielen`);
    }

let logFamNamen = function (){
    me.namen.forEach(function(element) {
        console.log(element);
    })
}


