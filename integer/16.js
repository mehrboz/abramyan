const a=123;
const b=a%10;
const c=((a-b)%100);
const d=((a-(b+c))/100);
console.log(b*10+c*10+d);