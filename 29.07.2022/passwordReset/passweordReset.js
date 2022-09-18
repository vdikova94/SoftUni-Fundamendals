function passwordReset(input) {
    let password = input.shift().split('');
    let newPass = [];
    let pass = '';

    for (let i = 0; i < input.length; i++) {
        let commandArray = input[i].split(' ');
        let command = commandArray.shift();
        let flag = false;

        switch (command) {
            case 'TakeOdd':
                for (let i = 1; i < password.length; i += 2) {
                    let nextLetter = password[i];
                    newPass.push(nextLetter);
                }
                pass = newPass.join('');
                console.log(pass);
                break;

            case 'Cut':
                let [charCount, curChar] = commandArray;
                let oldPass = pass;
                let cuttedPass = oldPass.split('');
                cuttedPass.splice(charCount, curChar);
                pass = cuttedPass.join('');
                console.log(pass);
                break;

            case 'Substitute':
                let [substring, substituteChar] = commandArray;
                let subNewPass = pass.split(substring).join(substituteChar);
                if (subNewPass !== pass) {
                    console.log(subNewPass);
                } else {
                    console.log(`Nothing to replace!`);
                }
                pass = subNewPass;
                break;
            case 'Done':
                flag = true;
                break;
        }
        if (flag) {
            break;
        }

    }
    console.log(`Your password is: ${pass}`);
}
passwordReset
    (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
        "TakeOdd",
        "Cut 18 2",
        "Done",
        "Substitute ! ***",
        "Substitute ? .!.",

    ])