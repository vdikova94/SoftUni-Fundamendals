function bombNumber(numbers, bombParams) {
    let bombNumber = bombParams[0];
    let bombPower = bombParams[1];

    while (numbers.indexOf(bombNumber) !== -1) {
        for (const number of numbers) {
            if (number === bombNumber) {
                let bombIndex = numbers.indexOf(bombNumber);

                let rightStart = bombIndex + 1;
                let rightCount = bombPower;

                if (rightStart + rightCount >= numbers.length) {
                    rightCount = numbers.length - bombIndex + 1;
                }

                numbers.splice(rightStart, rightCount);

                bombIndex = numbers.indexOf(bombNumber);

                let leftStart = bombIndex - bombPower;
                let leftCount = bombPower + 1;

                if (leftStart < 0) {
                    leftStart = 0;
                    leftCount = bombIndex + 1;
                }

                numbers.splice(leftStart, leftCount);
            }
        }
    }

    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    console.log(result);
}

bombNumber([4, 1], [4, 2]);