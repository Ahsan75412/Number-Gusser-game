
var numOfWin = 0;
var numOfLost = 0;


for(var i=1; i<=3 ; i++){
var guessNum = parseInt(prompt("Enter a Number From 1 to 10 :"));
var randomNum  = Math.floor(Math.random()*10) + 1;


if(guessNum == randomNum){
    console.log("you Win!!");
    numOfWin++;
    
    if(guessNum < randomNum){
        console.log("Your Guess Is too low!");
    }

    else(guessNum > randomNum)
        console.log("Your Guess Is too high!");
    }

    else {
        console.log("You Have lost . Random Number is "+randomNum);
        numOfLost++;
    }
    
}



document.write("Total Number of Win = " + numOfWin + "<br>");
document.write("Total Number of Lost = " + numOfLost + "<br>");



// if(guessNum == randomNum){
//     console.log("you Win!!");
//     numOfWin++;
// } 
// else {
//     console.log("You Have lost . Random Number is "+randomNum);
//     numOfLost++;
// }

// }
// document.write("Total Number of Win = " + numOfWin + "<br>");
// document.write("Total Number of Lost = " + numOfLost + "<br>");