let n = parseInt(prompt('n='));
let a = parseInt(prompt('a='));
let b = parseInt(prompt('b='));
if (b != 0) {
    switch (n) {
        case 1:
            console.log('jam', a + b);
            break;
        case 2:
            console.log('tarh', a - b);
            break;
        case 3:
            console.log('taqsim', a / b);
            break;
        case 4:
            console.log('zarb', a * b);
            break;


    }
}
else {
    console.log(b == 0)
}