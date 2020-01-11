function calculatePoints(goalA, goalB) {
  if (goalA > goalB) {
    return [2, 0];
  } else if (goalA === goalB) {
    return [1, 1];
  } else {
    return [0, 2];
  }
}

function decideWinner(teamA, teamB) {
  if (teamA.points > teamB.points) {
    return -1;
  } else if (teamA.points === teamB.points) {
    const diffA = teamA.goal_s - teamA.goal_c;
    const diffB = teamB.goal_s - teamB.goal_c;
    if (diffA > diffB) {
      return -1;
    } else if (diffA === diffB) {
      if (teamA.goal_s > teamB.goal_s) {
        return -1;
      } else if (teamA.goal_s === teamB.goal_s) {
        return 0;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

function makeTeamObject(mapTable, team, goalA, goalB, point) {
  const value = mapTable[team] || { points: 0, goal_s: 0, goal_c: 0 };
  return {
    id: team,
    points: value.points + point,
    goal_s: value.goal_s + goalA,
    goal_c: value.goal_c + goalB
  };
}

function cmp(mapTable) {
  return (a, b) => {
    const teamA = a;
    const teamB = b;

    const diffA = teamA.goal_s - teamA.goal_c;
    const diffB = teamB.goal_s - teamB.goal_c;
    return (
      teamB.points - teamA.points ||
      diffB - diffA ||
      teamB.goal_s - teamA.goal_s
    );
  };
}
function computeRanks(number, games) {
  // Your solution
  const mapTable = Array(number).fill(0);

  games.forEach(([teamA, teamB, goalA, goalB]) => {
    const points = calculatePoints(goalA, goalB);
    mapTable[teamA] = makeTeamObject(mapTable, teamA, goalA, goalB, points[0]);
    mapTable[teamB] = makeTeamObject(mapTable, teamB, goalB, goalA, points[1]);
  });

  const cmpCurried = cmp(mapTable);
  mapTable.sort(cmpCurried);

  const ans = Array(number).fill(0);
  // for (let x = 0, prev = null, k; x < number; prev = mapTableArr[x++]) {
  //   console.log(prev);

  //   if (!prev || cmpCurried(mapTableArr[x], prev) !== 0) {
  //     console.log(prev, mapTableArr[x]);
  //     if (prev) console.log(cmpCurried(prev, mapTableArr[x]));
  //     k = x + 1;
  //   }
  //   ans[mapTableArr[x]] = k;
  // }

  for (let i = 0, prev = null, k; i < number; prev = mapTable[i++]) {
    if (!prev || cmpCurried(prev, mapTable[i]) !== 0) {
      k = i + 1;
    }
    ans[mapTable[i].id] = k;
  }
  console.log(ans);
  return ans;
}

// function computeRanks(number, games) {
//   const teams = [...Array(number)].map((_, i) => ({
//     id: i,
//     score: 0,
//     goals: 0,
//     diff: 0
//   }));
//   games.forEach(([a, b, x, y]) => {
//     teams[a].goals += x;
//     teams[b].goals += y;
//     teams[a].diff += x - y;
//     teams[b].diff += y - x;
//     if (x === y) {
//       teams[a].score += 1;
//       teams[b].score += 1;
//     } else {
//       teams[x > y ? a : b].score += 2;
//     }
//   });
//   console.log(teams);
//   const cmp = (a, b) =>
//     b.score - a.score || b.diff - a.diff || b.goals - a.goals;
//   teams.sort(cmp);
//   const r = Array(number).fill(0);
//   for (let i = 0, prev = null, k; i < number; prev = teams[i++]) {
//     console.log(prev, teams[i].id);
//     if (!prev || cmp(prev, teams[i]) !== 0) {
//       console.log(prev, teams[i].id);
//       k = i + 1;
//       console.log(k);
//     }
//     r[teams[i].id] = k;
//   }
//   return r;
// }
// console.log(
//   computeRanks(6, [
//     [0, 5, 2, 2],
//     [1, 4, 0, 2],
//     [2, 3, 1, 2],
//     [1, 5, 2, 2],
//     [2, 0, 1, 1],
//     [3, 4, 1, 1],
//     [2, 5, 0, 2],
//     [3, 1, 1, 1],
//     [4, 0, 2, 0]
//   ]),
//   [4, 4, 6, 3, 1, 2]
// );

console.log(
  computeRanks(4, [
    [0, 3, 1, 1],
    [1, 2, 2, 2],
    [1, 3, 2, 0],
    [2, 0, 2, 0]
  ]),
  [3, 1, 1, 3]
);

// Plan
/**
 * 
Map: {
  num,
  points,
  goals_s,
  goals_c
}
 * 
 * 
 */
