let A = parseInt(prompt('a='));
let B = parseInt(prompt('b='));
console.log("A = ", A);
console.log("B = ", B);
let r = A - B;
while (r >= B) {
    r -= B
}
console.log('r=', r);