const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's a number between 1 and 10? ", function(number) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  rl.close();
});
