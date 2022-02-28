let N = parseFloat(prompt('N='));
let p = 1
for (i = 1; i <= N; i++) {
    x = 1 + i * 0.1;
    p *= x;
    console.log(p);
}