let n = parseInt(prompt('n='));
let k = n;
while (k >= n) {
    n = Math.pow(2, k)
    console.log("natija=", n)
}