let x = parseInt(prompt('a='))
let N = parseFloat(prompt('N='));
let p = x;
let s = 1;
let k = 0;
for (i = 1; i <= N; i++) {
    k += 2;
    p *= (-1) * x * x / (k * (k + 1));
    s += p;
    console.log(s)
}