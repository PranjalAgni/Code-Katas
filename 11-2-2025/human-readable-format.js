function formatDuration(seconds) {
  // Complete this function
  const yearSeconds = 31_622_400;
  const daySeconds = 86_400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;
  console.log(Math.floor(87500 / hourSeconds));
}

console.log(formatDuration(1), '1 second');
console.log(formatDuration(62), '1 minute and 2 seconds');
console.log(formatDuration(120), '2 minutes');
console.log(formatDuration(3600), '1 hour');
console.log(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
