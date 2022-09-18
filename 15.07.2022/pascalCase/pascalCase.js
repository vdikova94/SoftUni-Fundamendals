function pascalCase(words) {
    let patern = /[A-Z][a-z]+|[A-Z]/g;
    let wordArray = words.match(patern);
    let word = wordArray.join(', ')
    console.log(word);
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('---------------------');
pascalCase('HHHaa');
console.log('---------------------');
pascalCase('ThisIsSoAnnoyingToDo');