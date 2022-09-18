function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = username.split("").reverse().join("");
    let counter = 0;
    while (input[index] !== password) {
        counter++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`)
            return;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
    }
    console.log(`User ${username} logged in.`);
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])