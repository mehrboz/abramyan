let a = 14;
let b = 32;
while ((a != 0) & (b != 0)) {
    if (a > b) {
        a = a % b;
    }

    else {
        b = b % a;
    }
    console.log(a + b);
}