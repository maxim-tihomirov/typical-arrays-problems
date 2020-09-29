
exports.min = function min (array) {
  return (array === undefined ? 0 : array.length && Math.min(...array));
}

exports.max = function max (array) {
  return (array === undefined ? 0 : array.length && Math.max(...array));
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  return array.reduce((pr, cur) => pr + cur) / array.length;
}
