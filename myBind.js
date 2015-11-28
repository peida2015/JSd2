Function.prototype.myBind = function (context) {
  console.log("This is myBind.");
  var fn = this;
  // function () = {
  return function () {
    fn.apply(context);
  // }();
  };
};

// var Person = function (name, age){
//   this.name = name;
//   this.age = age;
// };
//
// Person.prototype.sayHi = function () {
//   console.log(this);
//   console.log(this.name + " says 'Hi'.");
// };

function times(num, fun) {
  for (var i = 0; i < num; i++) {

    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  ageOneYear: function () {
    // console.log(this);
    this.age += 1;
    console.log(this.age);
  }
};

cat.ageOneYear(); // works

times(3, cat.ageOneYear.myBind(cat));
