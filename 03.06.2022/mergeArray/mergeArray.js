function mergeArray(furstArr, secondArr) {
    let furstArrLength = furstArr.length;
    let newArray = [];
    for (let i = 0; i < furstArrLength; i++) {
        let currentIndex = 0;
        if (i % 2 === 0) {
            currentIndex = Number(furstArr[i]) + Number(secondArr[i]);
        } else {
            currentIndex = String(furstArr[i]) + String(secondArr[i]);
        }
        newArray.push(currentIndex)
    }
    console.log(newArray.join(' - '));
}
mergeArray(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])