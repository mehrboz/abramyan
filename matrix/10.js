arr=['php','php','css','css','html','html','java','c++','c++']
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < array.length; j++) {
        const el = array[j];
        if(element===el){
            console.log(element)
        }
    }
    
}