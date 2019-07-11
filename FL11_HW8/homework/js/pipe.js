function pipe(number, ...args) {
  for (var i in args) {
    number = args[i](number);
  }
  return number;
}
function addOne(x) {
  return x+1;
}
console.log(pipe(1,addOne));
console.log(pipe(1,addOne,addOne));
