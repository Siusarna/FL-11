function getMin(...args) {
  let min = Number.MAX_VALUE;
  for (var i in args) {
    if (args[i] < min){
      min = args[i];
    }
  }
  return min;
}
console.log(getMin(3,0,-3));
