let N = parseFloat(prompt('N='));
let s = 0, x;
for (i = 1; i <= N; i++) {
    x = (1 + i * 0.1) * (-1) ** (i + 1)
    s += x
    console.log(s)
}