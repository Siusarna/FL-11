const a = +prompt('Enter triangles length side A');
const b = +prompt('Enter triangles length side B');
const c = +prompt('Enter triangles length side C');
if ( isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0 ) {
  console.log('Triangle doesn’t exist');
} else if ( a + b <= c || a + c <= b || b + c <= a){
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Eequivalent triangle');
} else if (a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else{
  console.log('Normal triangle');
}
