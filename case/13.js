let n = parseInt(prompt('n='));
let X = parseInt(prompt('x='))
switch (n) {
    case 1:
        a = X;
        c = a * Math.sqrt(2);
        h = c / 2
        s = c * h / 2
        console.log(c, h, s)
    case 2:
        c = X;
        a = c / Math.sqrt(2);
        h = c / 2;
        s = c * h / 2;
        console.log(a, h, s);
        break;
    case 3:
        h = X;
        c = 2 * h;
        a = c / Math.sqrt(2);
        s = c * h / 2;
        console.log(a, c, s);
        break;
    case 4:
        s = X;
        h = Math.sqrt(s);
        c = 2 * h;
        a = c / Math.sqrt(2)
        console.log(h, c, a); F
    default:
        n = 'digar adad nest'
}
console.log(n)
