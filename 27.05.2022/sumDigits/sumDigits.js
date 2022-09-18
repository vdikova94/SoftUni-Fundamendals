function sumDigits(number) {
    let strNumber = String(number)
    let sum = 0;
    for (let i = 0; i < strNumber.length; i++) {
        let num = strNumber[i];
        num = Number(num);
        sum += num;
    }
    console.log(sum);
}
sumDigits(543)