function piccolo(input) {
    let carNumbers = new Set();

    for (let carLine of input) {
        let [command, car] = carLine.split(', ');

        switch (command) {
            case 'IN':
                carNumbers.add(car);
                break;
            case 'OUT':
                carNumbers.delete(car);
                break;
        }
    }

    if (carNumbers.size === 0) {
        console.log('Parking Lot is Empty');
    }

    let sortedCars = Array.from(carNumbers).sort();

    for (let key of sortedCars) {
        console.log(`${key}`);
    }
}


piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('-----------------------------');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);