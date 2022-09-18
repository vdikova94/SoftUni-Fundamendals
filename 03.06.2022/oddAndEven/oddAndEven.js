function oddAndEven(array) {
    let arrayLength = array.length;
    let newArray = [];
    let sumArr = 0;
    let sumNewArr = 0;
    for (let i = 0; i < arrayLength; i++) {
        let currentIndex = array[i];
        sumArr += currentIndex;
        if (currentIndex % 2 === 0) {
            currentIndex = array[i] + i;
        } else {
            currentIndex = array[i] - i;
        }
        newArray.push(currentIndex)
        sumNewArr += currentIndex
    }
    console.log(newArray);
    console.log(sumArr);
    console.log(sumNewArr);
}
oddAndEven([5, 15, 23, 56, 35])