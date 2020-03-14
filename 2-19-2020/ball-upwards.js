// h = v*t - 0.5*g*t*t
// 0.5gt2 - vt + h = 0

function maxBall(v0) {
  // console.log(v0);
  // convert to m/sec
  v0 = (v0 * 5) / 18;
  const g = 9.81;
  // Time to reach max height
  let t = 0;
  let hmax = 0; //max height
  let h = 0; //curr height
  let done = false;
  for (t = 0; h >= hmax; t++) {
    h = v0 * t - 0.5 * g * t * t;
    hmax = h;
    console.log(t);
    if (done) break;

    setTimeout(() => {
      done = true;
    }, 8000);
  }
  console.log(t);
}

console.log(maxBall(37), 10);
console.log(maxBall(45), 13);
console.log(maxBall(99), 28);
console.log(maxBall(85), 24);
