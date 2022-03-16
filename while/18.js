let n = parseInt(prompt('n='));
let s = 0;
let N = 0;
while (n > 0) {
    ++N;
    s += n % 10;
    n /= 10;
    console.log(n);
}