const Emitter = require('events');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
  console.log('Someone said hello');
});
emtr.on(eventConfig.GREET, () => {
  console.log('The great great in the sky');
});

emtr.emit('greet'); //OK, but less safe
emtr.emit(eventConfig.GREET);
