var countChange = function(money, coins) {
  let ans = 0;
  let currMoney = 0;
  ans = combinationChange(money, coins, ans, currMoney, 0);
  return ans;
};

function combinationChange(money, coins, ans, currMoney, idx) {
  if (currMoney > money) return ans;
  if (currMoney == money) {
    ans += 1;
    return ans;
  }

  for (let i = idx; i < coins.length; i++) {
    currMoney += coins[i];
    ans = combinationChange(money, coins, ans, currMoney, i);
    currMoney -= coins[i];
  }

  return ans;
}

console.log(countChange(4, [1, 2]), 3, 'Simple case');
console.log(countChange(10, [5, 2, 3]), 4, 'Another simple case');
console.log(countChange(11, [5, 7]), 0, 'No change');
