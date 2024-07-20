//Comparison
 function Comparison(p,q){
if(p > q){
    console.log(`${p}`, 'is Greater');
}
if(p < q){
    console.log( `${p}`,'is Less than', `${q}`);
}

if(p >= q){
    console.log(`${p}`, 'is Greater or equal to',`${p}`,);
}
if(p <= q){
    console.log( `${p}`,'is Less than or equal to', `${q}`);
}
if(p == q){
    console.log(`${p}`, 'is equal to' , `${q}`);
}else{
    console.log(`${p}`, 'is equal Not to' , `${q}`);
}
if(p === q){
    console.log( `${p}`,'is equal to', `${q}`);
}else{
    console.log(`${p}`, 'type is equal not to' , `${q}`);
}

 }
 

Comparison(50,30);
Comparison(30,30);
Comparison(50,"As it is a string it is not equal");


// function GreaterThan(p,q){

//     if(p > q){
//  console.log(`${p}`, 'is Greater');
//     }else{
//      console.log(`${q}`,'is Greater');
//     }
 
//  }
 
//  GreaterThan(50,30);
//  GreaterThan(20,30);
 
 
//  function lessThan(p,q){
 
//      if(p > q){
//   console.log( `${p}`,'is Less than', `${q}`);
//      }else{
//       console.log( `${q}`, 'is less than ', `${p}`);
//      }
  
//   }
  
//   lessThan(50,30);
//   lessThan(20,30);