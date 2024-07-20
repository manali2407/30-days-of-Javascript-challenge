function operand(p,q){
let r = (p += q)
return r;
} 
console.log(operand(20,30));
console.log(operand(20,'hello'));


function operand1(p,q){
    let r = (p -= q)
    return r;
    } 
    console.log(operand1(60,30));
    console.log(operand1(20,'hello'));