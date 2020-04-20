const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  EventEmitter.call(this); // super ctor call
  this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

// warning: arrow functions use lexical scoping
Greetr.prototype.greet = function (data) {
  console.log(`${this.greeting}: ${data}`);
  this.emit('greet', data);
};

let greet1 = new Greetr();

greet1.on('greet', (data) => {
  console.log(`Someone greet: ${data}`);
});

greet1.greet('Bob');
