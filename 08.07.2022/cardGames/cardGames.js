function cardGames(input) {
    let gamers = new Map();

    let enumCardPower = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,

    };
    let enumCardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    for (let element of input) {
        let [name, cards] = element.split(': ');
        cards = cards.split(', ');
        let cardsSet = new Set();

        if (gamers.has(name)) {
            for (let card of cards) {
                let anotherCard = gamers.get(name);
                anotherCard.add(card);
                gamers.set(name, anotherCard);
            }
        } else {
            for (let card of cards) {
                cardsSet.add(card);
                gamers.set(name, cardsSet);
            }
        }

    }

    for (let [key, value] of gamers) {
        let sumPoints = 0;
        for (let card of value) {
            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');

            sumPoints += Number(enumCardPower[cardPower] * enumCardType[cardType]);
        }
        console.log(`${key}: ${sumPoints}`);
    }

}
cardGames
    (['Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ])