function productInStore(productInStock, productInOrdered) {
    let parseProducts = function(products) {
        let productObjects = [];

        for (let i = 0; i < products.length; i += 2) {
            let product = {
                name: products[i],
                count: Number(products[i + 1]),
            }
            productObjects.push(product);
        }

        return productObjects;
    }

    let stockProducts = parseProducts(productInStock);
    let orderedProducts = parseProducts(productInOrdered);

    let allProducts = [];

    for (const product of stockProducts) {
        let tempProduct = product;

        for (const orderedProduct of orderedProducts) {
            if (orderedProduct.name === tempProduct.name) {
                tempProduct.count += orderedProduct.count;
            }
        }

        allProducts.push(tempProduct);
    }

    for (const orderedProduct of orderedProducts) {
        let found = false;

        for (const product of allProducts) {
            if (product.name === orderedProduct.name) {
                found = true;
            }
        }

        if (!found) {
            allProducts.push(orderedProduct);
        }
    }

    for (const object of allProducts) {
        console.log(`${object.name} -> ${object.count}`);
    }

}



productInStore([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])