let n=parseInt(prompt('n='))
let f1=1;
let f2=1;
let f=0;
let k=2;
while(f<n){
    k++
    f=f2+f1
    f2=f1
    f1=f
}
console.log('f_k-2=',f2)
console.log('f_k+2=',f1+f2);