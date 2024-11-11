prompt("What's a number between 1 and 10")

randomNumber = Math.floor(Math.random() * 10) +1;
document.getElementById("demo").innerHTML = randomNumber;
console.log(randomNumber);