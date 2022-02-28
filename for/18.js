let a=parseInt(prompt('a='))
let N = parseFloat(prompt('N='));
let p=1;
let s=1; 
for(i = 1; i <= N; i++) {
  p *= a*(-1);
  s += p;
     console.log(p)
}