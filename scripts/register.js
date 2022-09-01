console.log();
alert("There are four pets currently in the Saloon");

//object literal
let petSaloon ={
    //attributes
    name: "The Fashion Pet",
    phone: "555-555-5555",
    address:{
        state: "Florida",
        city: "Tampa",
        street: "N 48th Street",
        zip: "99999"
    },

    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"Shaggy",
            phone:"666-666-6666"
        },
        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"Mixed",
            service:"Nails cut",
            owners:"Shaggy",
            phone:"666-666-6666"
        },
        {
            name:"Mila",
            age:8,
            gender:"Female",
            breed:"Persian cat",
            service:"Cleaning",
            owner: "Sara Marshall",
            phone:"777-777-7777"
        },
        {
            name:"Perry",
            age:3,
            gender:"male",
            breed:"Parrot",
            service:"Feeding",
            owner:"Carrol Robinson",
            phone:"888-888-8888"
        }
    ]
}

console.log(petSaloon.pets);

document.getElementById("info").innerHTML = `
<p>${petSaloon.name}</p>
<p>${petSaloon.phone}</p>
<p>${petSaloon.address.state}</p>
`

