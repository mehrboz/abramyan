let n = parseInt(prompt('n='));
let r = 1;
if (n % 2 == 0) {
    console.log(2)
}
else {
    console.log(1)
}
let f = 1;
while (n >= r) {
    f *= -n
    n -= 2
    console.log('n!!=', f);
}