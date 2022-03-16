let n = parseInt(prompt('n='));
while (n) {
    if ((n % 10) % 2 == 1)
        n /= 10;
}
if (b == true) {
    console.log("YES");
}
else {
    console.log("NO");
}