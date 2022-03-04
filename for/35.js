const a = parseInt(prompt('a='));
let c = 0, a1 = 1, a2 = 2, a3 = 3;
for (let i = 4; i <= a; i++) {
    c = a3 + a2 - 2 * a1;
    console.log('a' + i + '=' + c);
    a1 = a2;
    a2 = a3;
    a3 = c
}