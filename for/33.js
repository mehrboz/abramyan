A = parseInt(prompt('a='))
N = parseInt(prompt('n='))
let f0 = 1;
for (k = 1; k <= N; k++) {
    f1 = (f0 - 1) / k;
    f0 = f1;
    console.log(f0)
}