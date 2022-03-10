let N = parseInt(prompt('n='));
let K = 1;
while (Math.pow(3, K) <= N) {
    K += 1;
}
K -= 2;
console.log("K = ", K)
