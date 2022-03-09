let N = parseInt(prompt('n='));
let s = 0;
for (i = 1; i <= N; i++) {
    s += Math.pow(i, i);
}
console.log(s)
