const Y = parseInt(prompt('y='))
switch (Y / 10) {
    case 2:
        console.log("двадцать ");
        break;
    case 3:
        console.log("тридцать ");
        break;
    case 4:
        console.log("сорок ");
        break;
    case 5:
        console.log("пятдесят ");
        break;
    case 6:
        console.log("шестьдесят ");
        break;

}
console.log(Y / 10)

switch (Y % 10) {
    case 1:
        console.log("один ");
        break;
    case 2:
        console.log("два ");
        break;
    case 3:
        console.log("три ");
        break;
    case 4:
        console.log("четыре ");
        break;
    case 5:
        console.log("пять ");
        break;
    case 6:
        console.log("шесть ");
        break;
    case 7:
        console.log("семь ");
        break;
    case 8:
        console.log("восемь ");
        break;
    case 9:
        console.log("девять ");
        break;
    default:
        Y = 'digar adad nest'
}
console.log(Y % 10)
