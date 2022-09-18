function rounding(number, roundNumber) {
    let maxRoundNumber = roundNumber;
    if (roundNumber > 15) {
        maxRoundNumber = 15;
    }
    let roundedNumb = number.toFixed(maxRoundNumber);
    console.log(parseFloat(roundedNumb));
}
rounding(10.5, 3)