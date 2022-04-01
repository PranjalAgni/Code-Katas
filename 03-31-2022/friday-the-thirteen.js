function fridayTheThirteenths(start, end) {
  end = end || start;
  const answerList = [];
  for (let year = start; year <= end; year += 1) {
    for (let month = 1; month <= 12; month++) {
      const date = new Date(`${year}-${month}-13`);
      const isFriday = date.getDay() === 5;
      if (isFriday) answerList.push(`${month}/13/${year}`);
    }
  }

  return answerList.join(' ');
}

console.log(fridayTheThirteenths(1999, 2000), '8/13/1999 10/13/2000');
console.log(fridayTheThirteenths(2000), '10/13/2000');
