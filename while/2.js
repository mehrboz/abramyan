let A = parseInt(prompt('a='));
let B = parseInt(prompt('b='));
console.log("A = ", A);
console.log("B = ", B);
let r = A - B;
n = 1
while (r >= B) {
    r -= B
    n += 1
}
console.log('shumorai b dar a=', r)
console.log('baqiya', n);