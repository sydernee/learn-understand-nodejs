const util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Policeman() {
  Person.call(this);
  this.badgeNumber = '123456';
}

util.inherits(Policeman, Person);

let officer = new Policeman();
officer.greet();
