var readline = require('readline');

var reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function (stacks) {
  this.stacks = stacks;
};

HanoiGame.prototype.promptMove = function (callBack) {
  console.log(this.stacks );
  reader.question("Take from which stack?", function (stackFrom) {
    reader.question("Go to which stack?", function (stackTo) {

      callBack(stackFrom, stackTo);
    });
  });
  reader.close();
};

HanoiGame.prototype.move = function (stackFrom, stackTo) {
  if (this.isValidMove(stackFrom, stackTo)) {
    this.stacks[stackTo].push(this.stacks[stackFrom].pop);

    console.log(this.stacks);
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (stackFrom, stackTo) {
  var fromStack = this.stacks[stackFrom];
  var toStack = this.stacks[stackTo];
  // console.log(fromStack, toStack);
  if (fromStack[fromStack.length - 1] < toStack[toStack.length - 1] || toStack == 0) {
    return true;
  } else {
    return false;
  }
};

var game = new HanoiGame([[3, 2, 1], [], [] ]);

console.log(game.isValidMove(0, 1));

console.log(game.move(0, 1));
console.log(game.move(0, 1));

game.promptMove(function (stackFrom, stackTo) {
  console.log(stackFrom, stackTo);
});
