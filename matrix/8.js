var ar = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    for (let j = i; j < ar.length; j++) {
        const el = ar[j];
        if (element === el) {
            str1 = ar.join('-')
        }
    }
}
console.log(str1)