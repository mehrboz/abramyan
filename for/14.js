let n = parseFloat(prompt('N='));
let r = 0;
let i;
for (i = 1; i <= (2 * n - 1); i += 2) {
    r += i;
}
console.log(r);