function phone(input) {
    let phoneArray = input.shift().split(", ");
    let index = 0;
    let comand = input[index];
    index++;

    while (comand !== "End") {
        let operation = comand.split(" - ")[0];
        let modelPhone = comand.split(" - ")[1];

        switch (operation) {
            case "Add":
                if (!phoneArray.includes(modelPhone)) {
                    phoneArray.push(modelPhone);
                }
                break;
            case "Remove":
                let indexOnRemoveElement = phoneArray.indexOf(modelPhone);
                if (indexOnRemoveElement !== -1) {
                    phoneArray.splice(indexOnRemoveElement, 1);
                }
                break;
            case "Bonus phone":
                let bonus = modelPhone.split(':');
                if (phoneArray.includes(bonus[0])) {
                    let indexOnReplaceElement = phoneArray.indexOf(bonus[0]);
                    phoneArray.splice(indexOnReplaceElement + 1, 0, bonus[1])
                }
                break;
            case "Last":
                let indexOnMoveElement = phoneArray.indexOf(modelPhone);
                if (indexOnMoveElement !== -1) {
                    let movePhone = phoneArray.splice(indexOnMoveElement, 1);
                    phoneArray.push(movePhone);
                }
                break;
        }
        comand = input[index];
        index++;
    }
    console.log(phoneArray.join(", "));
}

phone(
    ["SamsungA50, MotorolaG5, IphoneSE",
        "Add - Iphone10",
        "Remove - IphoneSE",
        "End"
    ])
console.log('---------------------');
phone(
    ["HuaweiP20, XiaomiNote",
        "Remove - Samsung",
        "Bonus phone - XiaomiNote:Iphone5",
        "End"
    ])
console.log('---------------------');
phone(
    ["SamsungA50, MotorolaG5, HuaweiP10",
        "Last - SamsungA50",
        "Add - MotorolaG5",
        "End"
    ])