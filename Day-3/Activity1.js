function checkNumber() {
    let a = 30;
    let b = -30;
    let c = 0;
    if (a > 0) {
        console.log('Number is postive');
    }

    if (b < 0) {
        console.log('Number is negative');
    }

    if (c == 0) {
        console.log('Number is zero');
    }
}

checkNumber()

function Voter(age) {
      if (age >= 18) {
        console.log("You are eligible for voteing");
      }else{
        console.log("age is less than 18, You are not eligible for voteing");
      }
}

 Voter(18);
 Voter(10);
 Voter(50); 