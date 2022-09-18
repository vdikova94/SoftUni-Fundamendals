function maxSequence(array) {

    let arrayLength = array.length;
    let newArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentArray = [];
        for (let j = i; j < arrayLength; j++) {
            if (array[i] === array[j]) {
                currentArray.push(array[i]);
            } else {
                break;
            }
        }
        if (currentArray.length > newArray.length) {
            newArray = currentArray;
        }
    }
    console.log(newArray.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])