function equalSums(array) {
    let arrayLength = array.length;
    let index = 0;

    for (let i = 0; i < arrayLength; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = i + 1; j < arrayLength; j++) {
            sumRight += array[j];
        }
        for (let k = 0; k <= i - 1; k++) {
            sumLeft += array[k];
        }

        if (sumLeft === sumRight) {
            console.log(i);
            return;
        }
    }

    console.log("no");
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])