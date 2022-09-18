function replceWord(replacementWord, text) {
    let replacementWordArr = replacementWord.split(', ');
    let textArr = text.split(' ');

    for (let wordToReplace of replacementWordArr) {
        for (let word of textArr) {
            if (word.includes('*') && word.length === wordToReplace.length) {
                text = text.replace(word, wordToReplace);
            }
        }
    }
    console.log(text);
}
//replceWord('great', 'softuni is ***** place for learning new programming languages')
console.log('----------------');
replceWord('great, learning', 'softuni is ***** place for ******** new programming languages')