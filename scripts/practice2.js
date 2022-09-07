//object literal

let lion ={
    name:"Simba",
    food:"Carnivore",
    isTheKingOfJungle: true
}

//object constructor

function Athlete(name,sport,position,age){
    this.name=name;
    this.sport=sport;
    this.position=position;
    this.age=age;
}

let obj1 = new Athlete("Steph Curry","Basketball","PG",34);
let obj2 = new Athlete("Tom Brady","Football","QB",44);
let obj3 = new Athlete("Tiger Woods","Golf","Golfer",47);