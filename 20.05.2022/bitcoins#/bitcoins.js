function bitcoins(input) {
    let index = 0;
    let gold = input[index];
    const priceGold = 67.51;
    const priceBitcoin = 11949.16;
    let sumMoney = 0;
    let byBitcoins = 0;
    let day = 0;
    let dayByBitcoinCount = 0;
    let dayByBitcoin = 0;

    for (let i = 1; i <= input.length; i++) {
        day++;
        if (day % 3 === 0) {
            gold *= 0.70;
        }
        let goldMoney = gold * priceGold;
        sumMoney += goldMoney;
        index++;
        gold = input[index];

        while (sumMoney >= priceBitcoin) {
            byBitcoins++;
            dayByBitcoinCount = day;
            if (dayByBitcoin === 0) {
                dayByBitcoin = dayByBitcoinCount;
            }
            sumMoney -= priceBitcoin;
        }
    }
    console.log(`Bought bitcoins: ${byBitcoins}`);
    if (byBitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayByBitcoin}`);
    }
    console.log(`Left money: ${sumMoney.toFixed(2)} lv.`);

}
bitcoins([3124.15, 504.212, 2511.124])