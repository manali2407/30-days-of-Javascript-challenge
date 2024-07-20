function operatrors(a,b,c){

    if (a < b  && b > c) {
        console.log(`${a}`,' <', `${b}`, '&&', `${b}`,' >', `${c}`);
    }

    if (a == b  || a == c) {
        console.log('One condition is true');
        
    }

    if (a != b ){
        console.log(`${a}`, 'is not equal to', `${b}`);
    }


let equalNumber = (a == c)? "Numbers are equal": "Numbers are not equal"
console.log('Ternary operator',equalNumber);


}

//operatrors(10,30,20);

operatrors(10,30,10);