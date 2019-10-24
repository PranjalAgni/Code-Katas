function solution(str) {
  const strArray = str.split('');
  let start = 0;
  let end = strArray.length - 1;
  while (start < end) {
    let temp = strArray[end];
    strArray[end] = strArray[start];
    strArray[start] = temp;
    start++;
    end--;
  }
  return strArray.join('');
}

function solution([a, ...b]) {
  console.log(a, b);
  return b.length ? solution(b) + a : a;
}

console.log(solution('Hello'));
