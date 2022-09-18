function products(input) {

    let element = input.join(' ');
    let regExPattern = /[>]{2}(?<product>[A-Z][A-z]+)[<]{2}(?<price>\d+.\d+)!(?<count>\d+)/gm;
    let productArray = [];
    let totalPrice = 0;
    let valid;

    while ((valid = regExPattern.exec(element)) !== null) {

        let productName = valid.groups['product'];
        let productPrice = Number(valid.groups['price']);
        let productCount = Number(valid.groups['count']);

        productArray.push(productName);
        totalPrice += productPrice * productCount
    }

    console.log(`Bought furniture:`);
    productArray.forEach(product => console.log(product));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
products
    (['>>Laptop<<312.2323!3',
        '>>TV<<300.21314!5',
        '>Invalid<<!5',
        '>>TV<<300.21314!20',
        '>>Invalid<!5',
        '>>TV<<30.21314!5',
        '>>Invalid<<!!5',
        'Purchase'
    ])