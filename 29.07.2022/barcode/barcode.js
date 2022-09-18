function barcode(input) {

    let barcodeCount = input.shift();
    let validBarcodePattern = /@#{1,}[A-Z][A-Za-z0-9]{4,}[A-Z]@#{1,}/gm;
    let groupPattern = /\d+/gm;

    for (let barcode of input) {
        if (barcode.match(validBarcodePattern)) {
            if (barcode.match(groupPattern)) {
                let productGroup = barcode.match(groupPattern).reduce((a, b) => { return a + b });
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
barcode
    (["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"
    ]);