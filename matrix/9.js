var array1 = [5, 2, 1, -10, 8];
var array2 = [5, 2, 1, -9, 3, 7];
let array3 = array1.concat(array2)
let abc = [...new Set(array3)];
console.log(abc)
