function stringManipulation(input) {

    let string = input.shift();
    let flag = false;
    for (let operation of input) {

        let element = operation.split(' ');
        let command = element.shift();
        switch (command) {
            case 'End':
                flag = true;
                break;
            case 'Translate':
                let char = element[0];
                let replaceChar = element[1];
                let newArray = string.split(' ');
                let replacedArray = [];
                newArray.forEach(element => {
                    let replaced = element.replace(char.trim(), replaceChar);
                    replacedArray.push(replaced);
                });
                string = replacedArray.join(' ');
                console.log(string);
                break;
            case 'Includes':
                let includesElement = element[0];
                if (string.includes(includesElement)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                let startChar = element[0];
                if (string.startsWith(startChar)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                string = string.toLowerCase();
                console.log(string);
                break;
            case 'FindIndex':
                let findCharIndex = element[0];
                let index = string.lastIndexOf(findCharIndex);
                console.log(index);
                break;
            case 'Remove':
                let startIndex = element[0];
                let count = element[1];
                let oldString = string;
                let cuttedString = oldString.split('');
                cuttedString.splice(startIndex, count);
                string = cuttedString.join('');
                console.log(string);
                break;
        }
        if (flag) {
            break;
        }
    }
}

stringManipulation(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
])
console.log('-----------------------------');