let a = parseFloat(prompt('a='))
let N = parseInt(prompt('N='));
let x = 1
for (i = 1; i <= N; i++) {
    x = 1 + a + Math.pow(a, i);
    console.log(x);
}