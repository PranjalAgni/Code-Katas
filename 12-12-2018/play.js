let explorePlayground = function() {};

explorePlayground.prototype.sayHello = function() {
  return 'Hello';
};

explorePlayground.prototype.got = function(text) {
  console.log(text);
  return text + ' thanks';
};

explorePlayground.prototype.crossover = function(ch1, ch2) {
  // Crossover at 3rd bit.
  let storech1 = ch1.substring(0, 3) + ch2.substring(3);
  ch2 = ch2.substring(0, 3) + ch1.substring(3);
  ch1 = storech1;
};

let obj1 = new explorePlayground();
console.log(obj1.sayHello());
console.log(obj1.crossover('100100', '100111'));
