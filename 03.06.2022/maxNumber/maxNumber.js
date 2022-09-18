function maxNumber(array) {
    let arrayLength = array.length;
    let newArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentElement = array[i];
        let isLargest = true;

        for (let j = i + 1; j < array.length; j++) {
            let currentNexElement = array[j];
            if (currentNexElement >= currentElement) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArray.push(currentElement)
        }
    }
    console.log(newArray.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17])