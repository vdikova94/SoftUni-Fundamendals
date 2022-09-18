function houseParty(guestsList) {
    let goingNames = [];

    for (const personString of guestsList) {
        let indexOfNot = personString.indexOf(' not ');
        let name = personString.split(' ')[0];
        let isGoing = false;

        if (indexOfNot === -1) {
            if (goingNames.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                goingNames.push(name);
            }

            isGoing = true;
        } else {
            if (goingNames.includes(name)) {
                goingNames.splice(goingNames.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(goingNames.join("\n"));
}

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);