randomNumber = Math.floor(Math.random() * 10) +1;
let number = prompt("What's a number between 1 and 10");

if (number == randomNumber) {
    alert("You guessed it!")
}
else if (number != randomNumber) {
    alert("try again")
}