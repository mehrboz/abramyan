var a = parseInt(prompt());
var b = parseInt(prompt());

if (a !== b) a += b;
else
    if (a == b) a = 0;
console.log(a)