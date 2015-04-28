module.exports.newArray = function (a, b, c, d) {
  
  newArray = new Array(a, b, c, d);
  return newArray;
}
module.exports.firstAndLast = function (array) {
  return [array [0], array[array.length -1]];
}