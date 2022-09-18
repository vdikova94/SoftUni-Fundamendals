function perfectNum(number) {
    let sumNum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumNum += i;
        }
    }
    if (sumNum === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNum(5)