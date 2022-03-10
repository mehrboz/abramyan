let N = parseInt(prompt('n='));
console.log(N);

let K = 1;
while (K * K <= N) {
    K += 1;
    console.log("K = ", K)
    console.log("K^2 = ", K * K);
    console.log("{K+1}^2 = ", (K + 1) * (K + 1));
}