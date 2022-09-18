function wordTracker(input) {
    let searchWordsArray = input.shift().split(' ');
    let wordMap = new Map();
    for (let searchWord of searchWordsArray) {
        let searchWordCount = 0;
        for (let word of input) {
            if (searchWord === word) {
                searchWordCount += 1;
            }
        }
        wordMap.set([searchWord], [searchWordCount]);
    }
    let sortedSearchWord = Array.from(wordMap.entries()).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [key, value] of sortedSearchWord) {
        console.log(`${key} - ${value}`);
    }
}
wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

)
console.log('----------------------');
wordTracker(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
    ]

)