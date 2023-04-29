const debounce = (fn, delay, immediate) => {
  if (immediate) fn();
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args2);
    }, delay);
  };
};

let flag = false;

// delay of 200
const dbFn = debounce(() => (flag = true), 200);

// call function at time t=0
dbFn();

setTimeout(() => {
  describe('simple test 1', () => {
    console.log(!flag, 'function should not be executed at time t=100');
  });
}, 100);

setTimeout(() => {
  describe('simple test 2', () => {
    console.log(flag, 'function should be executed by time t=300');
  });
}, 300);
