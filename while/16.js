let p = parseFloat(prompt('p='))
let k = 1;
let d = 10;
let s = 10;
while (s <= 200) {
    ++k;
    d += d * p / 100
    s += d;
    console.log(s)
}