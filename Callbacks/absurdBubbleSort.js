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

  if (i === arr.length - 1) {
    return outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
    })
    return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  }
}

// askIfGreaterThan(1, 3, (boolean) => console.log(boolean));