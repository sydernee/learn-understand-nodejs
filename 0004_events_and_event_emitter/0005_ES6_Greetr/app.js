'use strict';
const Greetr = require('./greetr');
const eventConfig = require('./config').events;

let greet1 = new Greetr();
greet1.on(eventConfig.GREET, (data) => {
  console.log(`Someone greet: ${data}`);
});

greet1.greet('Bob');
