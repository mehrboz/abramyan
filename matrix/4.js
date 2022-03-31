var ar = ["php", "php", "php", "php", "css", "css", "script", "script", "html", "html", "java"];
for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    for (let j = i; j < ar.length; j++) {
        const el = ar[j];
        if (element === el) {
            ar.splice(j, 1)
        }
    }
}
console.log(ar)