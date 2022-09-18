function towns(townsInfo) {

    for (let element of townsInfo) {
        let el = element.split(' | ');

        let townInfo = {
            town: el[0],
            latitude: Number(el[1]).toFixed(2),
            longitude: Number(el[2]).toFixed(2),
        }
        console.log(townInfo);
    }
}
towns(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]

)