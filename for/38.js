let N = parseInt(prompt('n='));
let K = parseInt(prompt('a='))
let s = 0, p;
for (i = 1; i >= N; i--) {
    p = 1.0;
    for (j = 1; j <= K; j++)
        p += i -= 1;
    s -= p;
}
console.log("N = ", N)
console.log("K = ", K)
console.log("Tarh = ", s)
