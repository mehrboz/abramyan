let N = parseFloat(prompt('N='));
let s = d % 2 !== 0;
for (i = 1; i <= N; i++) {
    x = (Math.pow(N, 2) == s++) + (2 * N - 1);
    s += x
    console.log(s)
}