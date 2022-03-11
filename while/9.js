let N = parseInt(prompt('n='));
console.log(N);
let K = 1;
while (K * K <= N) {
    K += 1;
    console.log("K = ", K)
    console.log("3^k = ", Math.min(3 ** K));
}