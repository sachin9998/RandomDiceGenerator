
// Random number generator
var randomNumber1 = Math.floor(6 * Math.random() + 1);
var randomNumber2 = Math.floor(6 * Math.random() + 1);

// Random dice image generator i.e dice.img string
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// Generating images/dice.img string
var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

// Selecting Source image attribute
var firstDice = document.querySelectorAll("img")[0];
var secondDice = document.querySelectorAll("img")[1];

// Setting dices
firstDice.setAttribute("src", randomImageSource1);
secondDice.setAttribute("src", randomImageSource2);

// Changing H1 Titles
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}