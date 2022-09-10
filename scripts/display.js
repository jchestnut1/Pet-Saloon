function displayPetTable() {
    const petTable = document.getElementById("petTable");
    petTable.innerHTML = ``;
    //travel the array
    for(let i = 0; i < petSaloon.pets.length; i++){
   
    
    //get the pet
    let pet=petSaloon.pets[i]; 
     
   //create the template
    let tr = `
   <tr id="${pet.id}">
        <td>"${pet.name}"</td>
        <td>"${pet.age}"</td>
        <td>"${pet.gender}"</td>
        <td><button onclick="deletePet(${pet.id})">🗑️</button>
        </td>
    </tr>    
    `;

   
    //insert template into html
    petTable.innerHTML+=tr;
    }
}

