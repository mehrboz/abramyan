let n = parseInt(prompt('n='))
let ak1 = 0;
let ak = 2;
let k = 1;
while (Math.abs(ak - ak1) >= n) {
    ++k;
    ak1 = ak;
    ak = 2 + 1 / f1
}
console.log('k=', k);