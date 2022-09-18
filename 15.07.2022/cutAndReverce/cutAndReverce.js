function cutAndReverse(data) {
    let dataReverse = data.split("").reverse();
    let firtsHalfPart = dataReverse;
    let secondHalfPart = dataReverse.splice(0, dataReverse.length / 2);
    console.log(firtsHalfPart.join(''));
    console.log(secondHalfPart.join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')