class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storageArray = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        let productQuantity = product.quantity;

        if (this.capacity >= productQuantity) {
            this.storageArray.push(product);
            this.capacity -= productQuantity;
            let totalPrice = product.price * product.quantity;
            this.totalCost += Number(totalPrice);
        } else {
            this.storageArray.push({
                name: product.name,
                price: product.price,
                quantity: this.capacity,
            });

            let totalPrice = product.price * this.capacity;

            this.capacity = 0;
            this.totalCost += Number(totalPrice);
        }
    }

    getProducts() {
        let encodedArray = [];

        this.storageArray.forEach(element => {
            encodedArray.push(JSON.stringify(element));
        });

        return encodedArray.join('\n');
    }
}

let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
let productThree = { name: 'Tomato', price: 0.90, quantity: 19 };
let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.totalCost);
console.log(storage.getProducts());
console.log(storage.capacity);