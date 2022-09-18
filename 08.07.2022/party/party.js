function party(input) {

    let vipGuest = [];
    let guest = [];
    let isParty = false;

    for (let person of input) {
        if (person === 'PARTY') {
            isParty = true;
            continue;
        }

        if (!isParty) {
            let firstChar = Number(person[0]);
            if (!isNaN(firstChar)) {
                vipGuest.push(person);
            } else {
                guest.push(person)
            }
        } else {
            let firstChar = Number(person[0])
            if (!isNaN(firstChar)) {
                let index = vipGuest.indexOf(person);
                vipGuest.splice(index, 1);
            } else {
                let index = guest.indexOf(person);
                guest.splice(index, 1);
            }

        }
    }
    let personCount = vipGuest.length + guest.length;

    console.log(personCount);

    for (let person of vipGuest) {
        console.log(person);
    }
    for (let person of guest) {
        console.log(person);
    }

}
party
    (['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ])
console.log('================================');
party(
    ['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]

)