//Link to Problem: "https://www.codewars.com/kata/merged-string-checker/train/javascript"
function isMerge(s, part1, part2) {
  // Traverse in the string
  // Check for the characters
  console.log('Orignal', s);
  console.log('Part1', part1);
  console.log('Part2', part2);
  if (s.length === part1.length + part2.length) {
    
    if (s === part1 + part2) {
      return true;
    }

    let len = s.length;
    let p1_idx = 0;
    let p2_idx = 0;
    let currentpos = 0;
    let done;
    let result = [];
    while (len) {
      done = true;
      if (s[currentpos] === part1[p1_idx] || s[currentpos] === part2[p2_idx]) {
        console.log(p1_idx,p2_idx);
        done = false;

        if (s[currentpos] === part2[p2_idx]) {
          p2_idx += 1;
          result.push(s[currentpos]);
        }
        else if (s[currentpos] === part1[p1_idx]) {
          p1_idx += 1;
          result.push(s[currentpos]);
        }

        
        else {
          ;
        }
      }
      currentpos += 1;
      len -= 1;
      if (done) {
        return false;
      }
    }
    console.log(result.join(''));
    return true;
  }

  return false;
}

console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'));
