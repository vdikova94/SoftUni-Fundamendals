function sortByTwoCriteria(input) {

    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join('\n'));
}
sortByTwoCriteria(['alpha', 'beta', 'gamma'])