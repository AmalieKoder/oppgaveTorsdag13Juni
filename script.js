/*// Constructor function
function character(firstName, lastName,furrColor, eyes, traits) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.furrColor = furrColor;
    this.eyes = eyes;
    this.traits = traits;
}

// Creating an instance of the Character
const amalieCatsCharacter = new character("Yuki", "Snow", "whiteCream", "blue", "");




// Function to display the character
function displayCharacter(character) {
    const myCharacter = document.querySelector("#myCharacter");
    const infoCharacter = document.querySelector("#infoCharacter");
   
    myCharacter.textContent = 
    `${character.firstName} ${character.lastName}`;

    infoCharacter.textContent =  `Yuki furr color is ${character.furrColor} and her eyes are ${character.eyes}.
    Shes have a fluffy tail, and her trait is `;
}

// Wait for the DOM to be fully loaded before running the script
 displayCharacter(amalieCatsCharacter);*/