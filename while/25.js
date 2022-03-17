let n=parseInt(prompt('n='))
let f1=1;
let f2=1;
let f=0;
while(f<n){
    f=f2+f1
    f2=f1
    f1=f
    console.log(f1)
}