function aMinerTask(input) {

    let resources = new Map();
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];

        if (resources.has(resource)) {
            let oldQuantity = resources.get(resource);
            let newQuantity = Number(oldQuantity) + Number(quantity);
            resources.set(resource, newQuantity)


        } else {
            resources.set(resource, quantity);
        }

    }

    for (let [key, value] of resources) {
        console.log(`${key} -> ${value}`);

    }
}
aMinerTask
    (['gold', '155',
        'silver', '10',
        'copper', '17',
        'gold', '15'
    ])