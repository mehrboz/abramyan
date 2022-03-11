let p = parseFloat(prompt('p='))
let k = 1;
let s = 1000;
while (s <= 1100) {
    ++k;
    s += s * p / 100
}
console.log(s)