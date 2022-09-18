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

        }

    }
    console.table(musicArray);
}
sonata([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Stop'
])