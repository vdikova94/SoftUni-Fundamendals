function repeatNumber(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        if (!newArr.includes(input[i])) {
            newArr.push(input[i])
        }
    }
    console.log(newArr.join(' '));
}
repeatNumber([20, 8, 12, 13, 4, 4, 8, 5])