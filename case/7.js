let n = parseInt(prompt('n='))
let a = parseInt(prompt('a='));
switch (n) {
    case 1:
        console.log(a * 1, 'kilogramm');
        break;
    case 2:
        console.log(a*10000, 'miligramm');
        break;
    case 3:
        console.log(a * 1000, "gramm");
        break;
    case 4:
        console.log(a / 1000, 'tonna');
        break;
    case 5:
        console.log(a / 100, 'sentner');
    default:
        console.log("digar adad vujud nadorad");
        break;
}