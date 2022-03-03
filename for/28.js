let X = parseInt(prompt('x='));
let n = parseInt(prompt('n='));
let  p = X/2.0;
let  s = 1 + X/2.0;
let k = 2.0;
for( i = 2; i <= n; i++) {
  k += 2;
  p *= (-1)*(k-3)/k*X;
  s += p;
  console.log(s)
 }