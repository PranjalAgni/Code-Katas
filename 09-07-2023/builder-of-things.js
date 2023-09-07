// https://www.codewars.com/kata/5571d9fc11526780a000011a
// This is a nice JS problem based on Proxy and Reflect in Javascript

class Thing {
  is_a = new Proxy(this, {
    get(target, key) {
      return target[key];
    },
    set(target, key, val) {
      // The Reflect.defineProperty() static method is like Object.defineProperty() but returns a Boolean.
      Reflect.defineProperty(target, `is_a_${key}`, { value: val });
      target[`is_a_${key}`] = val;
    },
  });
  constructor() {
    console.log('Thing constructor()');
  }
}
