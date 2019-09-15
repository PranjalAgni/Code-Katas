function computeTime(queue, min) {
  let newQueue = [];
  for (let i = 0; i < queue.length; i++) {
    queue[i] -= min;
    if (queue[i] !== 0) {
      newQueue.push(queue[i]);
    }
  }
  return newQueue;
}

function queueTime(customers, n) {
  let ans = 0;
  let queue = [];
  let isQueue = false;
  for (let i = 0; i < customers.length; i++) {
    queue.push(customers[i]);
    if (queue.length === n) {
      let min = Math.min(...queue);
      ans += min;
      queue = computeTime(queue, min);
      isQueue = true;
    }
  }

  if (!isQueue && queue.length) {
    ans = Math.max(...queue);
  } else {
    for (let elt of queue) {
      ans += elt;
    }
  }

  return ans;
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([17, 2, 5, 8, 3, 9, 4], 3), 5);
