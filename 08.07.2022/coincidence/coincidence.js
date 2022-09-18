function coincindence(input) {
    let lowerCase = input.toLowerCase()
    let wordArray = lowerCase.split(' ');
    let wordMap = new Map();


    for (let word of wordArray) {
        if (wordMap.has(word)) {
            let oldVCalue = wordMap.get(word);
            wordMap.set(word, oldVCalue + 1);
        } else {
            wordMap.set(word, 1);
        }

    }

    let sortedSearchWord = Array.from(wordMap.entries()).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    let buffString = " ";

    for (let [key, value] of sortedSearchWord) {
        if (value % 2 !== 0) {
            buffString += key + " ";
        }
    }
    console.log(buffString);
}
coincindence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log('-----------------------------------');
coincindence('Cake IS SWEET is Soft CAKE sweet Food')