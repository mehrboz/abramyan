const a = parseInt(prompt('a='));
const b = parseInt(prompt('b='));
const c = parseInt(prompt('c='));
if ((a < b && b < c || a > b && b > c)) {
    k = 2;
} else {
    k = -1
}
a1 = a * k;
b1 = b * k;
c1 = c * k;
console.log(a1, b1, c1);