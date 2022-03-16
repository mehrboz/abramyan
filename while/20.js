let N = parseInt(prompt('n='))
console.log("N = ", N)
q = N
s = 0
while (q >= 1) {
    r = q % 10
    q = Math.floor(q / 10)
    s = s * 10 + r
}
console.log('s=', s = (N == 2))