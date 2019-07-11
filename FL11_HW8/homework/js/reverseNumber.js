function reverseNumber(number) {
  let reversed_number = 0;
  while(number !==0){
    reversed_number *=10;
    reversed_number += number %10;
    number -= number %10;
    number /= 10;
  }
  return reversed_number;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
