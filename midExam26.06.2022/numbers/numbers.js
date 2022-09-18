function numbers(input) {

    let numberArray = input.shift();

    if (numberArray.length === 0) {
        numberArray = [];
    } else if (numberArray.includes(" ")) {
        numberArray = numberArray.split(" ").map(Number);
    } else {
        numberArray = [Number(numberArray)];
    }

    let index = 0;
    let comand = input[index];
    index++;

    while (comand !== "Finish") {
        let operation = comand.split(" ")[0];
        let num = Number(comand.split(" ")[1]);

        switch (operation) {
            case "Add":
                numberArray.push(num);
                break;
            case "Remove":
                let indexOnRemoveElement = numberArray.indexOf(num);
                if (indexOnRemoveElement !== -1) {
                    numberArray.splice(indexOnRemoveElement, 1);
                }
                break;
            case "Replace":
                let replacableNum = Number(comand.split(" ")[2]);

                let indexOnReplaceElement = numberArray.indexOf(num);

                if (indexOnReplaceElement !== -1) {
                    numberArray.splice(indexOnReplaceElement, 1, replacableNum)
                }
                break;
            case "Collapse":
                for (let element of numberArray) {
                    if (element < num) {
                        let indexOnColapseElement = numberArray.indexOf(element);
                        numberArray.splice(indexOnColapseElement, 1);
                    }
                }
                break;
        }
        comand = input[index];
        index++;
    }
    console.log(numberArray.join(" "));
}
numbers(
    ["1 4 5 7 9",
        "Add 1",
        "Remove 4",
        "Finish"
    ]
);