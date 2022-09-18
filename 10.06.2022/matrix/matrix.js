function matrix(number) {
    let rowArray = Array(number).fill(number);
    //console.log(rowArray);
    for (let i = 0; i < number; i++) {
        console.log(rowArray.join(" "));
    }
}
matrix(7)