function vacations(peopleCount, type, day) {
    let totalPrice = 0;
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    totalPrice = peopleCount * 8.45;
                    break;
                case "Saturday":
                    totalPrice = peopleCount * 9.80;
                    break;
                case "Sunday":
                    totalPrice = peopleCount * 10.46;
                    break;
            }
            if (peopleCount >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case "Business":
            if (peopleCount > 100) {
                peopleCount -= 10;
            }
            switch (day) {
                case "Friday":
                    totalPrice = peopleCount * 10.90;
                    break;
                case "Saturday":
                    totalPrice = peopleCount * 15.60;
                    break;
                case "Sunday":
                    totalPrice = peopleCount * 16.00;
                    break;
            }
            break;

        case "Regular":
            switch (day) {
                case "Friday":
                    totalPrice = peopleCount * 15.00;
                    break;
                case "Saturday":
                    totalPrice = peopleCount * 20.00;
                    break;
                case "Sunday":
                    totalPrice = peopleCount * 22.50;
                    break;
            }
            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacations(30, "Students", "Sunday")