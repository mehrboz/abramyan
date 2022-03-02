let x = parseInt(prompt('a='))
let N = parseFloat(prompt('N='));
var p = 1;
var s = 1;
var k = 1;
for (i = 1; i <= N; i++) {
    p *= (-1) * x * x / (k * (k + 1));
    s += p;
    console.log(s)
}