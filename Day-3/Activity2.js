function largestNumber(a, b, c) {

    let largestNumberBe

    if (a >= b && a >= c) {
        largestNumberBe = a;
    } else if (b >= a && b >= c) {
        largestNumberBe = b
    } else {
        largestNumberBe = c
    }

    console.log('largest Number is', largestNumberBe);
}

largestNumber(10, 30, 70)