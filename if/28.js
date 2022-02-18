 const n=parseInt(prompt('n='))
 if (n % 4 == 0 && n % 100 == 0 && n % 400 != 0){
    console.log("високосный")
 }else{
    console.log("не високосный")
 }