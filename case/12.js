let n = parseInt(prompt('n='));
let X = parseInt(prompt('x='))
switch (n) {
    case 1:
        R = X;
        D = 2 * R;
        L = 2 * 3.14 * R;
        S = 3.14 * Math.sqrt(R);
        console.log(D, L, S);

    case 2:
        R = X / 2;
        D = X;
        L = 2 * 3.14 * R;
        S = 3.14 * Math.sqrt(R);
        console.log(R, L, S);

    case 3:
        R = X / 2 * 3.14;
        D = 2 * R;
        L = X;
        S = 3.14 * Math.sqrt(R);
        console.log(R, D, S);
    case 4:
        R = Math.sqrt(X / 3.14);
        D = 2 * R;
        L = 2 * 3.14 * R;
        S = X;
        console.log(R, D, L);
    default:
        'digar adad nest'
}
console.log(n);