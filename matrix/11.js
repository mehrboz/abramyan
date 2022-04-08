let arr1 = [5, 2, 1, -10, 8];
let arr2 = [5, 2, 1, -9, 3, 7];
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    if (arr1.indexOf(element) == -1) {
        arr1.push(element)
    }
}
console.log(arr1)