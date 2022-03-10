A = parseInt(prompt('a='))
let C = A
for (i = 0; i <= A; i++) {
    C = (1 / C) + 2;
}
console.log(C)