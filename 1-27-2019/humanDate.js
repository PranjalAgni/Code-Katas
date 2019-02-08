function humanReadable(seconds) {
  let sec = seconds % 60;
  let mins = (Math.floor(seconds / 60) % 60);
  let hrs = Math.floor(seconds / 3600);
  let pad = function(x) {
      return x < 10 ? ('0' + x.toString()) : (x.toString());
  }
  return pad(hrs) + ':' + pad(mins) + ':' + pad(sec);
}

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
