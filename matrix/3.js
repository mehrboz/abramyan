let a = [];
const len = parseInt(prompt('len='));
let f = 0;
for (let i = 0; i < len; i++) {
    a[i] = [];
    for (let j = 0; j < len; j++) {
        if (i == j || i == len - j - 1) {
            a[i][j] = 1
        } else if (i > j && j < len - i) {
            a[i][j] = 2
        } else if (j > i && j < len - i) {
            a[i][j] = 3
        } else if (j > i) {
            a[i][j] = 4
        } else if (i > j) {
            a[i][j] = 5
        } else {
            a[i][j] = 0
        }
    }
}

console.log(a)
