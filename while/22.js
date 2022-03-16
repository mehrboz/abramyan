let n = parseInt(prompt('n='));
while ((n > 0) & ((n % 10) % 2 == 0)) {
    n /= 10;
}
console.log("n=", n);