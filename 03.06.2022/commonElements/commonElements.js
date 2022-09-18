function commonElements(firstArr, secondArr) {
    let firstArrLenght = firstArr.length;
    for (let i = 0; i < firstArrLenght; i++) {
        let currentElement = firstArr[i];
        for (let element of secondArr) {
            if (element === currentElement) {
                console.log(currentElement);
                break;
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])