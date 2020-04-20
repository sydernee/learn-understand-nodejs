function Greetr() {
  this.greeting = 'Hello World';
  this.greet = () => {
    console.log(this.greeting);
  };
}

// come in 0003_repl_exports_with_own_obj, senza new
// = Greet() invece che new Greet()
module.exports = Greetr;
