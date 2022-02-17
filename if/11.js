let A = parseInt(prompt('A='))
let B = parseInt(prompt('B='))
if (A !== B) {
    A = B = Math.max(A, B)
}
else
    A = B = 0
console.log(A)