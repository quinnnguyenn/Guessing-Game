randomNumber = Math.floor(Math.random() * 10) +1;
let number = prompt("What's a number between 1 and 10")

if (number == randomNumber) {
alert("Thats right!");
}
else if (number != randomNumber) {
    prompt("Try again..")
}