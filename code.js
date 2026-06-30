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
//wait until the browser has loaded the html before trying to access the game form then run the game form 
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
    //prevent the form from submitting and refreshing the page
    event.preventDefault();
    //get and store firstname from strings
    const firstNameInput = document.getElementById("firstname");
    //trims any spaces before or after
    let firstNameString = firstNameInput.value.trim();
   
    //get and store lastname from strings
    const lastNameInput = document.getElementById("lastname");
    //trim spaces
    let lastNameString = lastNameInput.value.trim();
    
    //get and store zipcode from strings
    const zipInput = document.getElementById("zipcode");
    //trim spaces
    let zipString = zipInput.value.trim();
    
    //store first name last name and space
    let firstLastString = firstNameString + " " + lastNameString;
    //test is first and last input is less that 20 characters combined 
    if (firstLastString.length > 20)
    {
        alert("Invalid Input. First and Last name must be less than 20 characters combined.");
        return false;
    }
    //converts zipnumber string to numbers
    let zipNumber = parseInt(zipString);
    //checks if zip code is only numbers
    if (isNaN(zipString))
    {
        alert("Invalid Input. Zip code must be a number.");
        return false;
    }
    //checks if zip code is exactly 5 digits
    if (zipString.length != 5)
    {
        alert("Invalid Input. Zip code must be exactly 5 digits.");
        return false;
    }    
    //if all conditions above are met show cat gif and drone sound.
    if (zipString && firstLastString && zipString.length == 5)
    {
        //if all inputs are valid, display the cat gif 
        document.getElementById("catGif").style.display = "block";

        //if all inputs are valid, play the drone sound
        document.getElementById("droneSound").play();
    }

}
//wait until the browser has loaded the html before trying to access the strings form then run the strings form
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
    //prevent page from reloading
    event.preventDefault();
    //pull palindrom result from strings and store it
    const palindromeInput = document.getElementById("palindrome");
    //trim spaces from palindrome
    let palindromeString = palindromeInput.value.trim();
    //tells user that they cant enter nothing
    if (palindromeString.length == 0) {
        document.getElementById("palindromeResult").innerHTML = "You can't not choose a word!";
        return false;
    }
    //tests palindrone for no numbers or symbols
    if (!/^[a-zA-Z]+$/.test(palindromeString)) {
        document.getElementById("palindromeResult").innerHTML = "Please enter letters only, no numbers or symbols.";
        return false;
    }
    //lets user know where the word they entered is palindrome
    if (isPalindrome(palindromeString))
    {
        document.getElementById("palindromeResult").innerHTML = "The word is a palindrome!";
    } else {
        document.getElementById("palindromeResult").innerHTML = "The word is not a palindrome.";
    }
    //adds the try again button but hides it until after user inputs word
    document.getElementById("tryAgainButton").style.display = "block";
}

function isPalindrome(str) {
    // Lowercase then compare to reversed version of the string, ignoring spaces
    let cleaned = str.replace(/\s+/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
//resets palindron when try again button is pushed
function resetPalindrome(event) {
    event.preventDefault();
    document.getElementById("palindrome").value = "";
    document.getElementById("palindromeResult").innerHTML = "";
    document.getElementById("tryAgainButton").style.display = "none";
}
//function for the question page
function theQuestion(event) {
    //prevents page from reloading
    event.preventDefault();
    // get the answer and trim
    const answerInput = document.getElementById("theanswer");
    let answer = answerInput.value.trim();
    //checks to make sure user submitted something
    if (answer.length == 0) {
        document.getElementById("answerResult").innerHTML = "You can't not choose a word!";
        return false;
    }
    //string manipulation to change first character to lowercase 
     let firstLetter = answer.charAt(0).toLowerCase();
     //tests if user inputted numbers
    if (!isNaN(firstLetter)) { 
        document.getElementById("answerResult").innerHTML = "You have to choose a word that starts with a letter!";
        return false;
    }
    //checks to make sure input is only lower case letters
    if (!(firstLetter >= 'a' && firstLetter <= 'z')) { 
        document.getElementById("answerResult").innerHTML = "You have to choose a word that starts with a letter!";
        return false;
    }
    // if the first letter entered is a-j the background turns green
    if (firstLetter >= 'a' && firstLetter <= 'j'){
        document.body.style.backgroundColor = "green"
    }
    //if the first letter entered is k-t the background turns yellow
    else if (firstLetter >= 'k' && firstLetter <= 't'){
        document.body.style.backgroundColor = "yellow"
    }
    //if the first letter entered is u-z the backround turns blue 
    else if (firstLetter >= 'u' && firstLetter <= 'z'){
        document.body.style.backgroundColor = "blue"
    }

}