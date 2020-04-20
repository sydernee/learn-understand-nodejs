let Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
  console.log('Someone said hello');
});

emtr.on('greet', () => {
  console.log('The greatest greet');
});

console.log('Hello');

emtr.emit('greet');
