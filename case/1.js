var i = parseInt(prompt("Введите число из диапазона 1-: "));
switch (i) {
    case 1:
        i = ' dushanbe';
        break;
    case 2:
        i = 'seshanbe';
        break;
    case 3:
        i = 'chorshanbe';
        break;
    case 4:
        i = 'panjshanbe';
        break;
    case 5:
        i = 'juma';
        break;
    case 6:
        i = 'shanbe';
        break;
    case 7:
        i = 'yakshanbe';
        break;


    default:
        i = "in khel ruz mavjud nest";
}
console.log(i)