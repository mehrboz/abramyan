let n = parseInt(prompt('n='))
let a = parseInt(prompt('a='));
switch (n) {
    case 1:
        console.log(a * 10, 'detsimetr');
        break;
    case 2:
        console.log(a / 1000, 'kilometr');
        break;
    case 3:
        console.log(a * 1, "metr");
        break;
    case 4:
        console.log(a * 1000, 'milimetr');
        break;
    case 5:
        console.log(a * 100, 'santimetr');
    default:
        console.log("digar adad vujud nadorad");
        break;
}