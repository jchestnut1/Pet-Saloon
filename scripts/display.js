function displayPetCards() {
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML = ``;
    //travel the array
    for(let i = 0; i < petSaloon.pets.length; i++){
   
    
    //get the pet
    let pet=petSaloon.pets[i]; 
     
   //create the template
    let tmp = `
    <div class="pet">
        <p>Name: ${pet.name}</p>
        <p>Age: ${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Breed: ${pet.breed}</p>
        <p>Owner: ${pet.owner}</p>
        <p>Phone: ${pet.phone}</p>
        <p>Service: ${pet.service}</p>
    </div>    
    `;

   
    //insert template into html
    petsDiv.innerHTML+=tmp;
    }
}

function displayPetTable(){

}