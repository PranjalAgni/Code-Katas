function compareVersions(version1, version2) {
  const version1List = version1.split('.');
  const version2List = version2.split('.');
  const N = version1List.length;
  const M = version2List.length;
  const min = Math.min(N, M);
  console.log("Length = ", min);
  
  for (let idx = 0; idx < min; idx++) {
    const valA = parseInt(version1List[idx]);
    const valB = parseInt(version2List[idx]);
    if (valA === valB) continue;
    else return valA > valB;
  }

  return N >= M;
}

console.log(compareVersions('11', '10'));

console.log(compareVersions('11', '11'));

console.log(compareVersions('10.4.6', '10.4'));

console.log(compareVersions('10.4', '11'));

console.log(compareVersions('10.4', '10.10'));

console.log(compareVersions('10.4.9', '10.5'));
