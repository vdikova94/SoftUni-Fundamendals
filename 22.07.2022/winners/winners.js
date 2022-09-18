function winners(input) {
    let namesMap = new Map();
    let names = input.shift().split(', ');

    names.forEach(element => { namesMap.set(element, 0) });

    let namesPatern = /[A-Za-z]+/gm;
    let distancePatern = /[0-9]/g;

    for (let element of input) {

        if (element === 'end of race') {
            break;
        }

        let name = element.match(namesPatern).join('');
        let distance = element.match(distancePatern).reduce((a, b) => { return Number(a) + Number(b) }, 0);

        if (namesMap.has(name)) {
            let newDistance = namesMap.get(name);
            newDistance += distance;
            namesMap.set(name, newDistance)
        }
    }

    let sortedNames = Array.from(namesMap).sort(([keyA, valueA], [keyB, valueB]) => { return valueB - valueA });

    console.log(`1st place: ${sortedNames[0][0]}`);
    console.log(`2nd place: ${sortedNames[1][0]}`);
    console.log(`3rd place: ${sortedNames[2][0]}`);

}
winners(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])