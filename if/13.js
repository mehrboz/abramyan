a = parseInt(prompt('a='))
b = parseInt(prompt('b='))
c = parseInt(prompt('c='))
if (a > b && b > c) {

    console.log(b)
}
else if (a > b && c > a) {
    console.log(a);
}
else {
    console.log(c)
}
