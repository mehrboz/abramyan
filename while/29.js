let e = parseFloat(prompt('e='))
let ak1 = 1, ak = 2, ak2;
let k = 2;
while ((ak - ak1) >= e) {
    ak2 = ak1;
    ak1 = ak;
    ak = (ak2 + 2 * ak1) / 3;
    ++k;
}
console.log('ak-1=', ak1, 'ak=', ak)