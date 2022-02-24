let n = parseInt(prompt('n='));
let x = parseInt(prompt('x='))
switch (n) {
    case 1:
        a = x;
        r1 = a * Math.sqrt(3) / 6;
        r2 = 2 * r1;
        s = a * a * Math.sqrt(3) / 4;
        console.log(r1, r2, s);
        break;
    case 2:
        r1 = x;
        a = r1 * 6 / Math.sqrt(3);
        r2 = 2 * r1;
        s = a * a * math.sqrt(3) / 4;
        console.log(a, r2, s);
        break;
    case 3:
        r2 = x;
        r1 = r2 / 2;
        a = r1 * 6 / Math.sqrt(3);
        s = a * a * Math.sqrt(3) / 4;
        console(a, r1, s);
        break;
    case 4:
        s = x;
        a = sqrt(s * 4 / sqrt(3));
        r1 = a * sqrt(3) / 6;
        r2 = 2 * r1;
        console.log(a, r1, r2);
        break;

    default:
        n = 'digar amal mavjud nest'
}
console.log(n)

