let A = parseFloat(prompt('a='));
let B = parseFloat(prompt('b='));
let C = parseFloat(prompt('c='))
console.log(A);
console.log(B)
console.log(C)

let k = 0;
let temp;
while ((A - C) >= 0) {
    A -= C;
    temp = B;
    while (temp - C >= 0) {
        temp -= C;
        ++k;
    }
}
console.log('k=', k)