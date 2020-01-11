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
    team_num: team,
    points: value.points + point,
    goal_s: value.goal_s + goalA,
    goal_c: value.goal_c + goalB
  };
}
function computeRanks(number, games) {
  // Your solution
  const mapTable = {};

  games.forEach(game => {
    const [teamA, teamB, goalA, goalB] = game;
    const points = calculatePoints(goalA, goalB);
    mapTable[teamA] = makeTeamObject(mapTable, teamA, goalA, goalB, points[0]);
    mapTable[teamB] = makeTeamObject(mapTable, teamB, goalB, goalA, points[1]);
  });

  let mapTableArr = Object.keys(mapTable);
  mapTableArr = mapTableArr.map(x => +x);
  const drawTeams = [];
  mapTableArr.sort((a, b) => {
    const teamA = mapTable[a];
    const teamB = mapTable[b];
    const winner = decideWinner(teamA, teamB);
    if (winner === 0) {
      if (!drawTeams.includes(a)) drawTeams.push(a);
      if (!drawTeams.includes(b)) drawTeams.push(b);
    }
    return winner;
  });

  let drawSharedPosition = null;
  let ans = [];
  for (let x = 0; x < mapTableArr.length; x++) {
    if (drawTeams.includes(mapTableArr[x])) {
      if (!drawSharedPosition) drawSharedPosition = x + 1;
      ans[mapTableArr[x]] = drawSharedPosition;
    } else {
      ans[mapTableArr[x]] = x + 1;
    }
  }

  return ans;
}

console.log(
  computeRanks(6, [
    [0, 5, 2, 2],
    [1, 4, 0, 2],
    [2, 3, 1, 2],
    [1, 5, 2, 2],
    [2, 0, 1, 1],
    [3, 4, 1, 1],
    [2, 5, 0, 2],
    [3, 1, 1, 1],
    [4, 0, 2, 0]
  ]),
  [4, 4, 6, 3, 1, 2]
);

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
