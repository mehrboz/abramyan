const n = parseInt(prompt('n='))
let p = 0;
for (i = 0; i < n; i++) {
    p += i
    console.log(p);
}
let s = 1
for (j = 1; j < n; j++) {
    s *= j
    console.log(s)
}
