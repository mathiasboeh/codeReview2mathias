//Player names
var Player1 = prompt("Player 1, please enter your name!");
var Player2 = prompt("Player 2, please enter your name!");

document.getElementById("name1").innerHTML = "Player 1: " + Player1;
document.getElementById("name2").innerHTML = "Player 2: " + Player2;

//roll-dice


//roll Player1
function rollDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice3 = document.getElementById("dice3");
     
     d1 = Math.floor(Math.random() * 6) + 1;
     d2 = Math.floor(Math.random() * 6) + 1;
     d3 = Math.floor(Math.random() * 6) + 1;
    
     diceTotal1 = d1 + d2 + d3;

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
     
     d4 = Math.floor(Math.random() * 6) + 1;
     d5 = Math.floor(Math.random() * 6) + 1;
     d6 = Math.floor(Math.random() * 6) + 1;
    
     diceTotal2 = d4 + d5 + d6;

document.getElementById("dice4").innerHTML = d4;
document.getElementById("dice5").innerHTML = d5;
document.getElementById("dice6").innerHTML = d6;
document.getElementById("status2").innerHTML = diceTotal2;
    

    }

   
    function winner1(){
    	if(diceTotal1>diceTotal2){
    	 document.getElementById("winner").innerHTML = "Player1 has won!";
    	}
    	if(diceTotal1<diceTotal2){
    	document.getElementById("winner").innerHTML = "Player2 has won!";
    	}
    	if(diceTotal1==diceTotal2){
    	document.getElementById("winner").innerHTML = "We have a draw! Try again!";
    	}

    }



function randomColor(){
	var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var erg= "rgb("+r+","+g+","+b+")";
    document.body.style.backgroundColor=erg;
}