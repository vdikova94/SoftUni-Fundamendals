function softUni(input) {

    let regExPattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*\<(?<product>\w+)\>[^|%$.]*\|(?<productCount>\d+)[^|%$.]*\|(?<price>\d+[\.]*\d+)?\$/gm;
    let inputInfo = input.join('');
    let totalPrice = 0;
    let valid;

    while ((valid = regExPattern.exec(inputInfo)) !== null) {

        let name = valid.groups['name'];
        let product = valid.groups['product']
        let productPrice = Number(valid.groups['price']);
        let productCount = Number(valid.groups['productCount']);

        totalPrice += productPrice * productCount;
        console.log(`${name}: ${product} - ${(productPrice*productCount).toFixed(2)}`);
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUni(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])