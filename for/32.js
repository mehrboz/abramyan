A = parseInt(prompt('a='))
N = parseInt(prompt('n='))

let A0 = 1;
for (k = 1; k <= N; k++) {
    A1 = (A0 + 1) / k;
    A0 = A1;
    console.log(A0)
}