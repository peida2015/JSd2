
var readline = require('readline');

var reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question("Enter number", function (numString) {
      var num1 = parseInt(numString);
      sum = sum + num1;
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }

}

addNumbers(0, 2, function(sum){
  console.log(sum);
});
