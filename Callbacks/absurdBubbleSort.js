const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2}? `, response => {
    if(response === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
    rl.close();
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  
}

// askIfGreaterThan(1, 3, (boolean) => console.log(boolean));