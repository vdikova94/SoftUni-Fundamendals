function loadBar(number) {
    let compleate = '%'.repeat(number / 10);
    let incompleate = '.'.repeat((100 - number) / 10);

    if (number === 100) {
        console.log(`100% Complete!`);
        console.log(`[${compleate}]`);
    } else {
        console.log(`${number}% [${compleate}${incompleate}]`);
        console.log(`Still loading...`);
    }
}
loadBar(70)