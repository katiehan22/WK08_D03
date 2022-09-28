const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  debugger
  if(numsLeft > 0) {
    rl.question('Enter a number: ', response => {
      let num = parseInt(response);
      sum += num;
      console.log(sum);
      return addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    rl.close();
    return completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));