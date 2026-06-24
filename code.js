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
        //if all inputs are valid, display the cat gif 
        document.getElementById("catGif").style.display = "block";

        //if all inputs are valid, play the drone sound
        document.getElementById("droneSound").play();
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
const form = document.getElementById("myForm");
if (form) {
    form.addEventListener("submit", validateInput);
}
});

//Variables for index.html meme movement
const memeImage = document.getElementById("memeimage");
    let posX = 0;
    let posY = 0;
    let directionX = 1;
    let directionY = 1;
    let intervalId;

//Movement functions for index.html meme to move around the page
function startMovement() {
    //enables the start button and disables the stop button to prevent multiple intervals from being created
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    //calls the moveMeme function every 100 milliseconds to create the movement effect
    intervalId = setInterval(moveMeme, 100);
}
//function that moves the mem around the page
function moveMeme() {
    //updates the position of the meme by adding the directional values to its position
    posX += directionX * 10;
    posY += directionY * 10;
    //checks if the meme has reached the edge of the window and reverses direction if it has
    if (posX <= 0 || posX >= window.innerWidth - memeImage.offsetWidth) {
        directionX *= -1;
    }
    //same but for the y direction
    if (posY <= 0 || posY >= window.innerHeight - memeImage.offsetHeight) {
        directionY *= -1;
    }
    //updates the position of the meme image on the page
    memeImage.style.left = posX + "px";
    memeImage.style.top = posY + "px";  
}

//function for index.html meme to stop moving around the page
function stopMovement() {
    //disables the start button and enables the stop button
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    //stops the interval that was created by startMovement stopping the meme from moving
    clearInterval(intervalId);
}


//function to check Palindrome in strings.html
function checkPalindrome(event){
    event.preventDefault();
    const palindromeInput = document.getElementById("palindrome");
    let palindromeString = palindromeInput.value.trim();

    if (isPalindrome(palindromeString))
    {
        document.getElementById("palindromeResult").innerHTML = "The word is a palindrome!";
    } else {
        document.getElementById("palindromeResult").innerHTML = "The word is not a palindrome.";
    }
    document.getElementById("tryAgainButton").style.display = "block";
}

function isPalindrome(str) {
    // Lowercase then compare to reversed version of the string, ignoring spaces
    let cleaned = str.replace(/\s+/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function resetPalindrome(event) {
    event.preventDefault();
    document.getElementById("palindrome").value = "";
    document.getElementById("palindromeResult").innerHTML = "";
    document.getElementById("tryAgainButton").style.display = "none";
}

function theQuestion(event) {
    event.preventDefault();
    // get the input, trim it
    const answerInput = document.getElementById("theanswer");
    let answer = answerInput.value.trim();

    if (answer.length == 0) {
        document.getElementById("answerResult").innerHTML = "You can't not choose a word!";
        return false;
    }

     let firstLetter = answer.charAt(0).toLowerCase();
     
    if (!isNaN(firstLetter)) { 
        document.getElementById("answerResult").innerHTML = "You have to choose a word that starts with a letter!";
        return false;
    }

    if (!(firstLetter >= 'a' && firstLetter <= 'z')) { 
        document.getElementById("answerResult").innerHTML = "You have to choose a word that starts with a letter!";
        return false;
    }

    if (firstLetter >= 'a' && firstLetter <= 'j'){
        document.body.style.backgroundColor = "green"
    }

    else if (firstLetter >= 'k' && firstLetter <= 't'){
        document.body.style.backgroundColor = "yellow"
    }

    else if (firstLetter >= 'u' && firstLetter <= 'z'){
        document.body.style.backgroundColor = "blue"
    }

}