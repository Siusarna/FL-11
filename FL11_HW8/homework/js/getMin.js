function getMin(...args) {
  let min = 999;
  for (var i in args) {
    if (args[i] < min){
      min = args[i];
    }
  }
  return min;
}
console.log(getMin(3,0,-3));
