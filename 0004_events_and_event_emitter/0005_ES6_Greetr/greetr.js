'use strict';
const EventEmitter = require('events');
const eventConfig = require('./config').events;

module.exports = class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello world!';
  }
  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit(eventConfig.GREET, data);
  }
};
