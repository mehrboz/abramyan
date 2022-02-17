A = parseInt(prompt('a='))
B = parseInt(prompt('b='))
C = parseInt(prompt('c='))
if (A > B && B > C || A < B && A > C) {
    console.log(B + A);

} else if (B < A && A < C || B < C && A > C) {
    console.log(A + C);

} else  {
    console.log(C+B);
     
}