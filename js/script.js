randomNumber = Math.floor(Math.random() * 10) +1;
let number = prompt("What's a number between 1 and 10");

if (number == randomNumber) {
    alert("You guessed it!")
}
else if (number != randomNumber) {
    let numberGuess = prompt("try again")
}
if (numberGuess == randomNumber) {
    alert("You guessed it!")
}
else if (numberGuess != randomNumber) {
    let numberGuess = prompt("try again")
}