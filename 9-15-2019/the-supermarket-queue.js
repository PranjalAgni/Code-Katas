function computeTime(queue, min) {
  for (let i = 0; i < queue.length; i++) {
    queue[i] -= min;
  }
  return queue;
}

function queueTime(customers, n) {
  let ans = 0;
  let queue = Array(n).fill(0);
  let isQueue = false;
  for (let i = 0; i < customers.length; ) {
    let queueIdx = queue.indexOf(0);
    while (queueIdx !== -1 && i < customers.length) {
      queue[queueIdx] = customers[i];
      queueIdx = queue.indexOf(0);
      i++;
    }

    if (n <= customers.length) {
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
