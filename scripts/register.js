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

    pets:[]
    
}

//console.log(petSaloon.pets);


//constructor

function Pet(name,age,gender,breed,service,ownersName,contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner=ownersName;
    this.phone=contactPhone;
}

function displaySaloonInfo(){
}

//get the values from the inputs
let nameInput=document.getElementById("petName");
let ageInput=document.getElementById("petAge");
let genderInput=document.getElementById("petGender");
let breedInput=document.getElementById("petBreed");
let ownersName=document.getElementById("ownersName");
let contactPhone=document.getElementById("contactPhone");

function isValid(aPet){
    let valid= true;

    if(aPet.name == "" || aPet.service==""){
        valid=false;
    }

    return valid;
}


function register(){
    console.log(nameInput.value,ageInput.value,genderInput.value,breedInput.value,);

    //create an obj using the object constructor
    let thePet = new Pet(nameInput.value,breedInput.value,genderInput.value,breedInput.value);
   
   
    if(isValid(thePet)==true){
   
    //push the object in the array
    petSaloon.pets.push(thePet);
    //display the obj in the console
    console.log(petSaloon.pets);
    clearInputs();
    displayPetCards();
    }else{
        alert("Please add required information");
    }
}
function clearInputs(){
    nameInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    breedInput.value = "";
    ownersName.value = "";
    contactPhone.value = "";
    serviceSelect.value="";
}

function init(){
    console.log("Registering");
    displaySaloonInfo();
    let scooby = new Pet("Scooby",30,"Male","Greyhound","Grooming","Shaggy","666-666-6666");
    let scrappy = new Pet("Scrappy",15,"Male","Dane","Grooming","Shaggy","666-666-6666");
    let garfield = new Pet("Garfield",5,"Male","Persian Cat","cleaning","Sarah","555-556-5555");
    petSaloon.pets.push(scooby,scrappy,garfield);

    displayPetCards();

}

window.onload=init;