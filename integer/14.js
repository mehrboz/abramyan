const a=653;
const b=a%10;
const c=((a-b)%100);
const d=((a-(b+c))/100);
console.log(d*10+c*10+b);