const A = parseInt(prompt('a='));
const B = parseInt(prompt('b='));
const C = parseInt(prompt('c='));
AB = Math.abs(A-B)
AC = Math.abs(A-C)
console.log(AB)
 if(AB<AC){
    console.log(B,A)
}else{
    console.log(C,A)
}