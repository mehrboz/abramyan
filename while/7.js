let n = parseInt(prompt('n='));
console.log('n=', n);
let K = 0;
while (Math.pow(K, 2) <= n) {
    K += 1
    console.log('k=', K)
}
