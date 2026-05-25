function Roll Dice(){
    //this is how a die can be rolled in js and dedicated as die1 so it can be used later by its name
    let die1 = Math.floor(Math.random() * 6) + 1;
    //same but for die2
    let die2 = Math.floor(Math.random() * 6) + 1;
    //sum of die1 and die2
    let sum = die1 + die2;
    //output the result of the roll to the gameoutput element in the html
    document.getElementById("gameoutput").innerHTML = "You rolled a " + die1 + " and a " + die2 + " for a total of " + sum;
}
