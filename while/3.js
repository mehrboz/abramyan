let n = parseInt(prompt('n='));
let k = parseInt(prompt('k='));
console.log('n=', n);
console.log('k=', k);
let r = n;
let q = 0;
while (r >= k) {
    r -= k
    q += 1
}
console.log('r=', r);
console.log('q=', q); 