const a = parseInt(prompt('a='));
let D = 0, a1 = 1, a2 = 2;
for (let i = 3; i <= a; i++) {
    D = (a1 + (2 * a2)) / 3;
    console.log('a' + i + '=' + D);
    a1 = a2;
    a2 = D
}