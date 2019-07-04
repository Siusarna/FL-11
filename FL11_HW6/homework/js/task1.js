const a1 = +prompt('Enter first coordinate for point A');
const a2 = +prompt('Enter second coordinate for point A');
const b1 = +prompt('Enter first coordinate for point B');
const b2 = +prompt('Enter second coordinate for point B');
const c1 = +prompt('Enter first coordinate for point C');
const c2 = +prompt('Enter second coordinate for point C');
const two = 2;
if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
  console.log('wrong number');
} else {
  console.log((a1+b1)/two === c1 && (a2+b2)/two === c2);
}
