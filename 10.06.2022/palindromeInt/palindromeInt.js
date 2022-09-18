function palindromeInt(array) {
    for (let i = 0; i < array.length; i++) {
        let currentNumToStr = String(array[i]);
        let reverseStr = currentNumToStr.split("").reverse().join("");

        if (reverseStr === currentNumToStr) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeInt([32, 2, 232, 1010])