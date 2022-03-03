let x = parseInt(prompt('x='));
let n = parseInt(prompt('n='));
for (i = 1; i<=n; i++){
  if(i%2!==0){
    let p=x-Math.pow(x,i)/i+Math.pow((-1),n-1)*Math.pow(x,n)/n;
    console.log(p);
}
}
