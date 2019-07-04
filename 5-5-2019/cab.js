function fitInOtherCabs(emptyCabs, target) {
  for (let i = 0; i < emptyCabs.length; i++) {
    if (emptyCabs[i] >= target) {
      emptyCabs[i] -= target;
      return 1;
    }
  }
  console.log('twice');
  return -1;
}

function tellNumberOfCabs(passengers) {
  emptyCabs = [];
  let cabsRequired = 0;
  for (let i = 0; i < passengers.length; i++) {
    if (i > 0) {
      const status = fitInOtherCabs(emptyCabs, passengers[i]);
      if (status === -1) {
        emptyCabs[i] = 4 - passengers[i];
        cabsRequired += 1;
      }
    } else {
      emptyCabs[i] = 4 - passengers[i];
      cabsRequired += 1;
    }
  }

  return cabsRequired;
}

console.log(tellNumberOfCabs([14, 2, 4, 1, 3]));
