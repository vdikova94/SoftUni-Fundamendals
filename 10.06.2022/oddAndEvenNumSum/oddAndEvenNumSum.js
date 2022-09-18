function oddAndEvenNumSum(number) {

    let numberToString = String(number);
    numberToString = numberToString.split("");
    let array = numberToString;

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[i]);

        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenNumSum(1000435)