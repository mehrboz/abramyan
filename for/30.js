let n = parseInt(prompt('n='))
let A = parseInt(prompt('a='));
let B = parseInt(prompt('b='));
let H = (B - A) / n;
console.log(H);
let x = A;
let y;
for (i = 1; i <= n; i++) {
    y = 1 - Math.sin(x);
    x += H;
}
console.log(x);