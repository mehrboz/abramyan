let x = parseInt(prompt('a='))
let N = parseFloat(prompt('N='));
let f = 1;
let s = 1;
for (i = 1; i <= N; i++) {
    f *= x / i;
    s += f;
    console.log(s)
}