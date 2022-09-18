function stringToSubstring(searchString, text) {
    let lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(searchString)) {
        console.log(searchString);
    } else {
        console.log(`${searchString} not found!`);
    }
}
stringToSubstring('123', 'JS is ');
console.log('=======================');
stringToSubstring('python', 'JavaScript is the best programming language');