// https://leetcode.com/problems/find-duplicate-file-in-system/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */

const addExtension = (baseDir, fileName) => `${baseDir}/${fileName}.txt`;

const findDuplicate = function (directories) {
  const hashMap = {};
  for (const directory of directories) {
    const paths = directory.split(' ');
    let baseDir = paths.shift();

    for (const path of paths) {
      const [fileName, content] = path.split('.txt');
      if (!hashMap[content])
        hashMap[content] = [addExtension(baseDir, fileName)];
      else hashMap[content].push(addExtension(baseDir, fileName));
    }
  }

  return Object.values(hashMap).filter((dir) => dir.length > 1);
};
