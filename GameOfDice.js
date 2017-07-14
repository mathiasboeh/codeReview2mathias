//Player names
var Player1 = prompt("Player 1, please enter your name!");
var Player2 = prompt("Player 2, please enter your name!");

document.getElementById("name1").innerHTML = "Player 1: " + Player1;
document.getElementById("name2").innerHTML = "Player 2: " + Player2;

//roll-dice


//roll Player1
function rollDice(){
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var dice3 = document.getElementById("dice3");
    status1 = document.getElementById("status1"); //global
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var d3 = Math.floor(Math.random() * 6) + 1;
    
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;
    dice3.innerHTML = d3;
    
var diceTotal1 = d1 + d2 + d3;

status1.innerHTML = "You rolled a " + diceTotal1 + "!";

}

//roll player2
function rollDice2(){
var dice4 = document.getElementById("dice4");
var dice5 = document.getElementById("dice5");
var dice6 = document.getElementById("dice6");
    status2 = document.getElementById("status2"); //global
var d4 = Math.floor(Math.random() * 6) + 1;
var d5 = Math.floor(Math.random() * 6) + 1;
var d6 = Math.floor(Math.random() * 6) + 1;
    
    dice4.innerHTML = d4;
    dice5.innerHTML = d5;
    dice3.innerHTML = d6;
    
    status2.innerHTML = "You rolled a " + diceTotal2 + "!";

}

//winner statement
if (status1 > status2){
    document.getElementById('winner').innerHTML = "Player 1 is the winner!";
}
if (status1 < status2){
    document.getElementById('winner').innerHTML = "Player 2 is the winner!";
}
if (status1 == status2){
    document.getElementById('winner').innerHTML = "No winner!";
}


//randomColor
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var erg = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('inner').style.background = erg;

}
