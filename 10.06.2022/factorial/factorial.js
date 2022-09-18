function factorial(firstNumFactorial, secondNumFactorial) {

    let furstNumberFactorial = calculateFactorial(firstNumFactorial);
    let secondNumberFactorial = calculateFactorial(secondNumFactorial);

    function calculateFactorial(number) {
        let factorialSum = 1;
        for (let i = number; i > 0; i--) {
            factorialSum *= i;
        }
        return factorialSum;
    }

    console.log(`${(furstNumberFactorial / secondNumberFactorial).toFixed(2)}`);
}
factorial(6, 2)