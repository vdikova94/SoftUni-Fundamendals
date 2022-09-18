function charactersInRange(firstChar, endChar) {
    let firstCharToCode = firstChar.charCodeAt();
    let endCharToCode = endChar.charCodeAt();

    let minChar = Math.min(firstCharToCode, endCharToCode);
    let maxChar = Math.max(firstCharToCode, endCharToCode);

    let charArray = [];

    for (let i = minChar + 1; i < maxChar; i++) {
        let currnetChar = i;
        currnetChar = String.fromCharCode(i);
        charArray.push(currnetChar);
    }
    console.log(charArray.join(' '));
}
charactersInRange('#', ':')