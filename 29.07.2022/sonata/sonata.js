function sonata(input) {
    let musicCount = input.shift();
    let musicArray = [];

    for (let i = 0; i < musicCount; i++) {
        let musicList = input[i].split('|');
        let piece = musicList[0];
        let composer = musicList[1];
        let key = musicList[2];
        let musicObject = {
            piece,
            composer,
            key,
        };
        musicArray.push(musicObject);
    }

    for (let i = musicCount; i < input.length; i++) {
        let element = input[i].split('|');
        let command = element[0];

        switch (command) {
            case 'Add':
                let piece = element[1];
                let composer = element[2];
                let key = element[3];
                let addingFlag = false;
                let musicObject = {
                    piece,
                    composer,
                    key,
                };
                for (let object of musicArray) {
                    if (object.piece === piece) {
                        addingFlag = true;
                        continue;
                    }
                }
                if (!addingFlag) {
                    musicArray.push(musicObject);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                let removePiece = element[1];
                let foundpieceFlag = false;
                for (let object of musicArray) {
                    if (object.piece === removePiece) {
                        let indexObject = musicArray.indexOf(object);
                        musicArray.splice(indexObject, 1)
                        console.log(`Successfully removed ${removePiece}!`);
                        foundpieceFlag = true;
                        continue;
                    }
                }
                if (!foundpieceFlag) {
                    console.log(`Invalid operation! ${removePiece} does not exist in the collection.`)
                }
                break;
            case 'ChangeKey':
                let changepPiece = element[1];
                let changeKey = element[2];
                let foundKeyFlag = false;
                for (let object of musicArray) {
                    if (object.piece === changepPiece) {
                        object.key = changeKey;
                        console.log(`Changed the key of ${changepPiece} to ${changeKey}!`);
                        foundKeyFlag = true;
                        continue;
                    }
                }
                if (!foundKeyFlag) {
                    console.log(`Invalid operation! ${changepPiece} does not exist in the collection.`)
                }
                break;
        }

    }

    for (let iterator of musicArray) {
        console.log(`${iterator.piece} -> Composer: ${iterator.composer}, Key: ${iterator.key}`);

    }
}
sonata([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
console.log('-----------------------');
sonata([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);