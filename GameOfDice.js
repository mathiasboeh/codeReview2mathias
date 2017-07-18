//Player names

var Player1 = prompt("Player 1, please enter your name!"); //"Text.prompt" does not allow second prompt to load

var Player2 = prompt("Player 2, please enter your name!");

document.getElementById("name1").innerHTML = "Player 1: " + Player1;
document.getElementById("name2").innerHTML = "Player 2: " + Player2;

//Title
var title = ["Game", "of", "Dice"];
document.getElementById("title1").innerHTML = title.join("   ");


//roll-dice

function rolling() {
    var d = Math.floor(Math.random() * 6) + 1;
    return d;
}

//roll Player1
function rollDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice3 = document.getElementById("dice3");

    var d1 = rolling();
    var d2 = rolling();
    var d3 = rolling();

    diceTotal1 = String(d1 + d2 + d3); //global variable

    document.getElementById("dice1").innerHTML = d1;
    document.getElementById("dice2").innerHTML = d2;
    document.getElementById("dice3").innerHTML = d3;
    document.getElementById("status1").innerHTML = diceTotal1;


}




//roll player2
function rollDice2() {
    var dice4 = document.getElementById("dice4");
    var dice5 = document.getElementById("dice5");
    var dice6 = document.getElementById("dice6");

    var d4 = rolling();
    var d5 = rolling();
    var d6 = rolling();

    diceTotal2 = String(d4 + d5 + d6); //global variable

    document.getElementById("dice4").innerHTML = d4;
    document.getElementById("dice5").innerHTML = d5;
    document.getElementById("dice6").innerHTML = d6;
    document.getElementById("status2").innerHTML = diceTotal2;


}


function winner1() {
    if (diceTotal1 > diceTotal2) {
        document.getElementById("winner").innerHTML = "Player1 has won!";
    }
    if (diceTotal1 < diceTotal2) {
        document.getElementById("winner").innerHTML = "Player2 has won!";
    }
    if (diceTotal1 == diceTotal2) {
        document.getElementById("winner").innerHTML = "We have a draw! Try again!";
    }

}



function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var erg = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = erg;
}