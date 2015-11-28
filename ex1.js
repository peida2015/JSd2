function Clock () {
  this.time = new Date();
  this.hours = this.time.getHours();
  this.minutes = this.time.getMinutes();
  this.seconds = this.time.getSeconds();
  this.printTime();
  // console.log("This is this: " + this);
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  var that_clock = this;
  that_clock.seconds +=1;
  if (that_clock.seconds === 60) {
    that_clock.seconds = 0;
    that_clock.minutes += 1;
  }

  if (that_clock.minutes === 60) {
    that_clock.minutes = 0;
    that_clock.hours += 1;
  }

  if (that_clock.hours === 24) {
    that_clock.hours = 0;
  }
  // console.log("that_clock is that_clock: " + that_clock);
  that_clock.printTime();
};

var clock = new Clock();
