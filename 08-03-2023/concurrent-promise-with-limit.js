// JS challenge: https://twitter.com/thdxr/status/1686856181745111040

const process = (num, delay) => {
  const randomNumber = Math.floor(Math.random() * 100);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(`Resolving this with result as ${num}`);
      } else {
        reject(`Rejecting this with result as ${num}`);
      }
    }, delay);
  });
};

const challenge = async () => {
  const tasks = Array.from(Array(1000)).map((_, idx) => idx);
  let queue = [];
  for (let idx = 0; idx < 1000; idx++) {
    queue.push(process(tasks[idx], 1000));
    if (idx > 0 && queue.length === 25) {
      const results = await Promise.allSettled(queue);
      console.log(results);
      queue = [];
    }
  }
};
