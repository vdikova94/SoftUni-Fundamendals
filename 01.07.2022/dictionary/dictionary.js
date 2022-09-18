function dictionary(input) {
    let dictionaryObject = {};

    input.forEach(element => {
        let term = JSON.parse(element);
        for (let [key, value] of Object.entries(term)) {
            dictionaryObject[key] = value;

        }
    });

    let unsortedKey = Object.keys(dictionaryObject);
    let sortedKey = unsortedKey.sort((a, b) => a.localeCompare(b));

    for (let key of sortedKey) {
        console.log(`Term: ${key} => Definition: ${dictionaryObject[key]}`);
    }

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])