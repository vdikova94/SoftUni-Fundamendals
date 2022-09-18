function printAndSum(firstNum, lastNum) {
    printLine = '';
    totalSum = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        printLine += `${i} `
        totalSum += i;
    }
    console.log(printLine);
    console.log(`Sum: ${totalSum}`);
}
printAndSum(5, 10)