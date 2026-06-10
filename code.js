function rollDice(event){
    event.preventDefault();
    //this is how a die can be rolled in js and dedicated as die1 so it can be used later by its name
    let die1 = Math.floor(Math.random() * 6) + 1;
    //same but for die2
    let die2 = Math.floor(Math.random() * 6) + 1;
    //sum of die1 and die2
    let sum = die1 + die2;
       //output the result of the roll to the gameoutput elements in the html
if (sum == 7 || sum == 11){
    document.getElementById("gameoutput").innerHTML = "You rolled a " + die1 + " and a " + die2 + " for a total of " + sum + ". Craps-You lose!";
    //if the sum is 7 or 11, output "Craps-You lose!" 
} else if (die1 == die2 && die1 % 2 == 0){
    document.getElementById("gameoutput").innerHTML = "You rolled a " + die1 + " and a " + die2 + " for a total of " + sum + ". You win!";
    //if the dice are the same and even, output "You win!"
} else {
    document.getElementById("gameoutput").innerHTML = "You rolled a " + die1 + " and a " + die2 + " for a total of " + sum + ". Push!";
    //if neither of the above conditions are met, output "Push!"
}
}
window.addEventListener("DOMContentLoaded", () => {
  const gameForm = document.getElementById("game");
  if (gameForm) {
    gameForm.onsubmit = rollDice;
  }
});

//Form funtion for strings.html

function validateInput(event)
{
    event.preventDefault();
    const firstNameInput = document.getElementById("firstname");
    let firstNameString = firstNameInput.value.trim();
    console.log(firstNameString);

    const lastNameInput = document.getElementById("lastname");
    let lastNameString = lastNameInput.value.trim();
    console.log(lastNameString);

    const zipInput = document.getElementById("zipcode");
    let zipString = zipInput.value.trim();
    console.log(zipString);

    let firstLastString = firstNameString + " " + lastNameString;

    if (firstLastString.length > 20)
    {
        alert("Invalid Input. First and Last name must be less than 20 characters combined.");
        return false;
    }

    let zipNumber = parseInt(zipString);

    if (isNaN(zipString))
    {
        alert("Invalid Input. Zip code must be a number.");
        return false;
    }

    let sanitizedZipString = "" + zipNumber;

    if (zipString.length != 5)
    {
        alert("Invalid Input. Zip code must be exactly 5 digits.");
        return false;
    }    
    
    if (zipString && firstLastString && zipString.length == 5)
    {
        document.getElementById("catGif").style.display = "block";
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
const form = document.getElementById("myForm");
if (form) {
    form.addEventListener("submit", validateInput);
}
});


const memeImage = document.getElementById("memeimage");
    let posX = 0;
    let posY = 0;
    let directionX = 1;
    let directionY = 1;
    let intervalId;

//Movement functions for index.html meme to move around the page
function startMovement() {
    //identifies the start button from the html page
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    //calls the moveMeme function every 100 milliseconds to create the movement effect
    intervalId = setInterval(moveMeme, 100);
}
function moveMeme() {
    posX += directionX * 10;
    posY += directionY * 10;

    if (posX <= 0 || posX >= window.innerWidth - memeImage.offsetWidth) {
        directionX *= -1;
    }
    if (posY <= 0 || posY >= window.innerHeight - memeImage.offsetHeight) {
        directionY *= -1;
    }
    memeImage.style.left = posX + "px";
    memeImage.style.top = posY + "px";  
}

//function for index.html meme to stop moving around the page
function stopMovement() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    clearInterval(intervalId);
}