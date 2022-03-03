let n = parseInt(prompt('n='));
let A = parseInt(prompt('a='));
let B = parseInt(prompt('b='))
H = (B - A) / n
console.log(A);
console.log(B);
console.log(n)
console.log(H)
let x = A;
for (i = 0; i < n; i++) {
    x += H;
    console.log(x);
}
