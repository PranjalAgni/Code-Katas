function comparator(nameA, nameB) {
  const lastA = nameA.split(' ')[1];
  const lastB = nameB.split(' ')[1];

  if (lastA === lastB) {
    const firstA = nameA.split(' ')[0];
    const firstB = nameB.split(' ')[0];
    return -1;
  }
  return lastA < lastB ? -1 : 1;
}

function sortReindeer(reindeerNames) {
  return reindeerNames.sort(comparator);
}

console.log(sortReindeer(['Kenjiro Mori', 'Susumu Mori', 'Akira Mori']));
