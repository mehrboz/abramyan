const x1=parseInt(prompt('x1='));
const y1=parseInt(prompt('y1='));
const x2=parseInt(prompt('x2='));
const y2=parseInt(prompt('y2='));
 const D=(((x1-x2)==(y1-y2)) && ((x1-x2)==(-1)*(y1-y2)) && (x1==x2) && (y1==y2));
 console.log(D)