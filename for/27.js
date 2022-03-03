let X = parseInt(prompt('x='));
let n = parseInt(prompt('n='));
let p = X;
let s = X;
let k = 1.0;
for (i = 1; i <= n; i++) {
    p *= k / ((k + 1) * (k + 2)) * X * X;
    s += p;
    k += 2;
    p *= k;
    console.log(p)
}