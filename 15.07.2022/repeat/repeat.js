function repeatChar(data) {
    let mySet = new Map();
    let array = [];
    let charArray = data.split("");

    for (const char of charArray) {
        mySet.add(char);
    }

    for (const iterator of mySet) {
        array.push(iterator)
    }

    console.log(array.join(''));

}
repeatChar('aaaaabbbbbcdddeeeedssaa'); //премагва всички повторения