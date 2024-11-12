randomNumber = Math.floor(Math.random() * 10) +1;
let number = prompt("What's a number between 1 and 10");

if (number == randomNumber) {
    alert("You guessed it!")
}
else if (number != randomNumber) {
    var numberGuess = prompt("try again")
}
else if (numberGuess == randomNumber) {
    alert("You guessed it!")
}
else if (numberGuess != randomNumber) {
    var numberGuess = prompt("try again")
}