function magicSum(array, numberOfSum) {
    let arrayLength = array.length;
    let newArray = [];
    let valid = '';

    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            let sum = array[i] + array[j];
            if (sum === numberOfSum) {
                valid = `${array[i]} ${array[j]}`;
                newArray.push(valid);
            }
        }
    }
    console.log(newArray.join('\n'));
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)