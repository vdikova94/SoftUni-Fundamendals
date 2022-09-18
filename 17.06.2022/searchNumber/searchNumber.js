function searchNumber(firstArray, secondArray) {
    let countFromFirstArray = secondArray[0];
    let deletedNum = secondArray[1];
    let searchNum = secondArray[2];

    let cropedArray = firstArray.slice(0, countFromFirstArray).splice(-(countFromFirstArray - deletedNum));
    let repeatNum = 0;
    for (let element of cropedArray) {
        if (searchNum === element) {
            repeatNum++
        }
    }
    console.log(`Number ${searchNum} occurs ${repeatNum} times.`);
}
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5])