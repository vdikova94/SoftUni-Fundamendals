function gameHero(heroes) {
    let ascendingByLevel = [];
    for (let element of heroes) {
        let el = element.split(' / ');

        let hero = {
            name: el[0],
            level: el[1],
            items: el[2],
        }
        ascendingByLevel.push(hero);
        ascendingByLevel.sort((a, b) => a.level - b.level);
    }

    for (let object of ascendingByLevel) {
        console.log(`Hero: ${object.name}`);
        console.log(`level => ${object.level}`);
        console.log(`items => ${object.items}`);
    }
}
gameHero(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ])