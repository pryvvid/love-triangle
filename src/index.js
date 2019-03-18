/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let numObj;
  let checkedKeys = [];
  let trianglesCount = 0;
  let first, second, third;
  if (preferences.length) numObj = makeObj(preferences);
  if (numObj) {
    for (let key in numObj) {
      if (key == numObj[key]) continue;
      if (checkNums(key, checkedKeys)) {
      
        first = numObj[key];
        second = numObj[first];
        third = numObj[second];
        if (third == key) {
          checkedKeys = [...checkedKeys, first, second];
          trianglesCount++;
        }
      }
    }
  }
  return trianglesCount;
};

function makeObj(arr) {
  let obj = {};
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      obj[i+1] = arr[i];
    }
  }
  return obj;
}

function checkNums(num, arr) {
  if (arr.length) {
    for (let i of arr) {
      if (i == num) return false;
    }
  }
  return true;
}
