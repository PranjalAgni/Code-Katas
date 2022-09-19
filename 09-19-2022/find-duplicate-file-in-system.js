// https://leetcode.com/problems/find-duplicate-file-in-system/
/**
 * @param {string[]} paths
 * @return {string[][]}
 */

const addExtension = (fileName) => `${fileName}.txt`;

var findDuplicate = function (paths) {
  const hashMap = {};
  const output = [];
  for (const path of paths) {
    const [fileName, content] = path.split('.txt');
    if (!hashMap[content]) hashMap[content] = [addExtension(fileName)];
    else hashMap[content].push(addExtension(fileName));
  }

  const fileNameList = Object.values(hashMap);
  for (const fileNameSubList of fileNameList) {
    if (fileNameSubList.length > 1) {
      output.push(fileNameSubList);
    }
  }

  return fileNameList;
};
