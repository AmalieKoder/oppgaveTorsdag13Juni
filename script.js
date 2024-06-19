//Get the id from the HTML and place it in JavaScript
const randomCatInfo = document.querySelector("#random");
const infoCharacter = document.querySelector("#infoCharacter");
const traitsInfo = document.querySelector("#infoLink")
const randomNameBtn = document.querySelector("#randomName");
const textName = document.querySelector("#textName");

// Array of possible fur colors
let furrColor = ["Red" , "Gray" , "Black" , "White" , "Cream", "Blue", "Cinnamon", "Fawn", "Brown"];

// Array of possible cat breeds
let breeds = ["Sjameser", "Maine coon", "Sphynx", "Hellig birma", "Munchkin", "Ragdoll", "Norsk skogkatt"]

// Array of possible traits
let trait = ["Aloof",  "Fluffy",  "Free Spirit",  "Frendly",   "Lazy",  "Talkative",  "PlayFull", "Curious", "Prowler"];

// Array of possible eye colors
let eyesColor = ["Blue", "Hazel", "Yellow", "Amber", "Green", "Orange", "Copper"]


// Random generater for furrColor, trait, eyesColor and breeds
function random(furrColor) {
    return furrColor[Math.floor(Math.random()*furrColor.length)];
}

function random(trait) {
    return trait[Math.floor(Math.random()*trait.length)];
}

function random(eyesColor) {
    return eyesColor[Math.floor(Math.random()*eyesColor.length)];
}

function random(breeds) {
    return breeds[Math.floor(Math.random()*breeds.length)];
}

// Event listener for the random catsInfo button
randomCatInfo.addEventListener("click", () => {
    infoCharacter.textContent = `furColor: ${random(furrColor)} and ${random(furrColor)}, traits: ${random(trait)}, eyesColor: ${random(eyesColor)}, breed: ${random(breeds)}`

});

// Arrays of possible FirstName And LastName
let firstName = ["Yuki", "Kuro", "Cleo", "Petunia", "Maria", "Muffin", "Leo", "Mira", "Finn", "Fant", "Shadow"]
let lastName = ["Snow", "Miller", "Marshall", "Kim", "Mork", "Volden", "Hamlingthon", "Jr", "Valantine", "Merlands"]

//Random generater for FirstName and LastName
function random(lastName) {
    return lastName[Math.floor(Math.random()*lastName.length)];
}

function random(firstName) {
    return firstName[Math.floor(Math.random()*firstName.length)];
}

//Event listener for the random names button
randomNameBtn.addEventListener("click", () => {
    textName.value = `${random(firstName)} ${random(lastName)}`;
});








