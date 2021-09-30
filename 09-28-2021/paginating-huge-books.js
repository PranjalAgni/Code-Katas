function countDigits(num) {
  return BigInt(num.toString().length);
}

// Time: O(N) | Space: O(1)
function pageDigits(pages) {
  let totalDigits = 0n;
  let currentPage = 1n;
  let digits = 1n;

  while (currentPage < pages) {
    let nextCurrentPage = BigInt(currentPage * 10n);
    if (nextCurrentPage > pages) {
      nextCurrentPage = pages;
    }

    const numbersInRange = nextCurrentPage - currentPage;
    totalDigits += digits * numbersInRange;
    digits += 1n;

    currentPage = nextCurrentPage;
  }

  return totalDigits + countDigits(currentPage);
}

console.log(pageDigits(4n), 4n);
console.log(pageDigits(12n), 15n);
console.log(pageDigits(100n), 192n);
