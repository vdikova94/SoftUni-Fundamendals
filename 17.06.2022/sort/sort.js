function sort(input) {
    let newArray = [];
    let acendingArray = input.slice().sort((a, b) => a - b);

    for (let i = 0; i < input.length; i++) {
        let maxNum = acendingArray.pop();
        newArray.push(maxNum);
        let minNum = acendingArray.shift();
        newArray.push(minNum);
    }
    console.log(newArray.join(' '));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])