function hashTag(text) {
    let textArray = text.split(' ');
    for (let word of textArray) {
        if (word.startsWith('#') && word.length > 1) {
            let newWord = word.replace(/[#]/g, '');
            let wordChar = newWord.toLowerCase();
            let incorectFlag = false;
            for (let i = 0; i < wordChar.length; i++) {
                let elementAscciCode = newWord.charCodeAt(i)
                if (elementAscciCode < 97 && elementAscciCode > 122) {
                    incorectFlag = true;
                    break;
                }
            }
            if (!incorectFlag) {
                console.log(newWord);
            }
        }
    }
}
hashTag('Nowadays everyone uses # to tag a speci44al word in socialMedia');
console.log('-------------------');
hashTag('The symbol ###### is known ###variously in English-speaking #reg66ions as the #number sign')