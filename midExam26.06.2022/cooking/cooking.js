function cooking(input) {
    let buget = input[0];
    let studentCount = input[1];
    let priceForPackageFlour = input[2];
    let priceForSingleEgg = input[3];
    let priceForSingleApron = input[4];
    let apronPrice = (Math.ceil(studentCount * 1.20)) * priceForSingleApron;
    let eggPrice = studentCount * 10 * priceForSingleEgg;
    let freePackegeFlour = Math.floor(studentCount / 5);
    let flourPrice = (studentCount - freePackegeFlour) * priceForPackageFlour;
    let totalBuget = apronPrice + eggPrice + flourPrice;

    if (buget < totalBuget) {
        console.log(`${(totalBuget - buget).toFixed(2)}$ more needed.`);
    } else {
        console.log(`Items purchased for ${totalBuget.toFixed(2)}$. `);
    }
}
cooking([946, 20, 12.05, 0.42, 27.89])