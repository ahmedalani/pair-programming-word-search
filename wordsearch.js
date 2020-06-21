/* eslint-disable */
const transpose = function (matrix) {
  let output = [];
  matrix.forEach((arr) => {
    arr.forEach((e, i) => {
      if (output[i]) {
        output[i].push(e)
      } else {
        output.push([e]);
      }
    });
  });
  return output;
};
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word)) return true
  }
  return false;
}

module.exports = wordSearch