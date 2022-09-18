function addAndSubtract(firstNum, secondNum, thirdNum) {
    let firstOperation = sum(firstNum, secondNum);
    let finalOperation = substract(firstOperation, thirdNum);
    console.log(finalOperation);

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function substract(firstOperation, thirdNum) {
        return firstOperation - thirdNum
    }

}
addAndSubtract(23, 6, 10)