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
    return false;

    event.preventDefault();
    const lastNameInput = document.getElementById("lastname");
    let lastNameString = lastNameInput.value.trim();
    console.log(lastNameString);
    return false;

    event.preventDefault();
    const zipInput = document.getElementById("zipcode");
    let zipString = zipInput.value.trim();
    console.log(zipString);
    return false;
}

window.addEventListener("DOMContentLoaded", (event) => {
const form = document.getElementById("myForm");
if (form) {
    form.addEventListener("submit", validateInput);
}
});

