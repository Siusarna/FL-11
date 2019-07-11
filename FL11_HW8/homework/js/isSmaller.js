function isBigger(first_number,second_number) {
  return first_number > second_number;
}
function isSmaller(first_number,second_number) {
  return isBigger(second_number,first_number);
}
console.log(isSmaller(5,-1));
