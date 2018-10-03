//opdracht 1

const lapRounds = {
    lap1: 55.99,
    lap2: 63.00,
    lap3: 63.01,
    lap4: 54.01,
    lap5: 62.79,
    lap6: 52.88,
    lap7: 53.10,
    lap8: 54.12
}

console.table(lapRounds);

//opdracht 2

  const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: "38",//toegevoegd voor opdracht 3
        salary: 2400,//toegevoegd voor opdracht 3
        //deze function hoort bij opdracht 3
        salaryPerHour: function(){
            let moneyPerHour = this.salary/this.hoursPerWeek;
            return moneyPerHour;
        }    
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: "42",//toegevoegd voor opdracht 3
        salary: 2850,//toegevoegd voor opdracht 3
        //deze function hoort bij opdracht 3
        salaryPerHour: function(){
            let moneyPerHour = this.salary/this.hoursPerWeek;
            return moneyPerHour;
        }    
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: "40",//toegevoegd voor opdracht 3
        salary: 2650,//toegevoegd voor opdracht 3
        //deze function hoor bij opodracht 3
        salaryPerHour: function(){
            let moneyPerHour = this.salary/this.hoursPerWeek;
            return moneyPerHour;
        }    
        }

]

teachers.forEach(function(element) {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} 
    he works ${element.hoursPerWeek} ours a week and earns ${element.salary} a month`);
})


//opdracht 3

teachers.forEach(function(element) {    
console.log(`I have a ${element.profession} named ${element.name} and he earns ${element.salaryPerHour()} per hour`);
})

