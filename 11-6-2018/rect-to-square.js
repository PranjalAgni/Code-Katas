function sqInRect(lng, wdth) {
  let result = [];
  while (true) {
    if (lng === wdth) {
      if (result.length === 0) {
        return null;
      }
      if (lng === 0 || wdth === 0) {
          return result;
      }
      result.push(lng);
      return result;

    } else {
      if (lng < wdth) {
        result.push(lng);
        wdth -= lng;
      } else {
        result.push(wdth);
        lng -= wdth;
      }
      console.log(lng, wdth);
    }
  }
}

console.log(sqInRect(5, 5), null);
console.log(sqInRect(5, 3), [3, 2, 1, 1]);
console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
