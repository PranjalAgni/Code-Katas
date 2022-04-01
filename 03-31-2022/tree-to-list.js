// Node defintion is preloaded in codewars editor
class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

function treeToArray(tree) {
  if (tree instanceof Array && !tree.length) return [];
  const queue = [tree];

  const answer = [];
  while (queue.length > 0) {
    const node = queue.shift();
    answer.push(node.data);
    for (const childNode of node.children) {
      queue.push(childNode);
    }
  }

  return answer;
}

function doTest(tree, expected) {
  const actual = treeToArray(tree);
  console.log(expected, actual);
}

doTest([], []);
doTest(
  new Node(1, [
    new Node(2, [new Node(3), new Node(4), new Node(5)]),
    new Node(3, [new Node(7)]),
  ]),
  [1, 2, 3, 3, 4, 5, 7]
);
doTest(
  new Node(1, [
    new Node(2, [new Node(3), new Node(4)]),
    new Node(5, [new Node(6)]),
    new Node(7),
  ]),
  [1, 2, 5, 7, 3, 4, 6]
);
doTest(
  new Node(1, [
    new Node('a', [new Node('A'), new Node('B')]),
    new Node('b', [new Node('C'), new Node('D', [new Node(null)])]),
  ]),
  [1, 'a', 'b', 'A', 'B', 'C', 'D', null]
);
doTest(
  new Node('H', [
    new Node('e', [
      new Node('l'),
      new Node('o', [new Node('w'), new Node('!')]),
    ]),
    new Node('l'),
  ]),
  ['H', 'e', 'l', 'l', 'o', 'w', '!']
);
