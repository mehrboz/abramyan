let a = parseFloat(prompt('a='));
let n = parseFloat(prompt('N='));
let r = 1;
let i;
for (i = 1; i <= n; i++) {
  r *= a;
  console.log(r);
}