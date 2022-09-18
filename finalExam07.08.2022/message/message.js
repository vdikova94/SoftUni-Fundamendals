function message(input) {
    let userMap = new Map();
    let capacity = input.shift();
    let flag = false;
    for (let iterator of input) {
        let iteratorArray = iterator.split('=');
        let command = iteratorArray.shift();

        switch (command) {
            case 'Add':
                let name = iteratorArray[0];
                if (userMap.get(name) === undefined) {
                    let sentMsg = Number(iteratorArray[1]);
                    let reciveMsg = Number(iteratorArray[2]);
                    let msg = sentMsg + reciveMsg;
                    userMap.set(name, msg);
                }
                break;

            case 'Message':
                let sender = iteratorArray[0];
                let reciver = iteratorArray[1];
                if (userMap.get(sender) === undefined || userMap.get(reciver) === undefined) {
                    break;
                }
                let oldMsgSender = Number(userMap.get(sender));
                let oldMsgReciver = Number(userMap.get(reciver));
                if (isNaN(oldMsgSender)) {
                    oldMsgSender = 0;
                }
                if (isNaN(oldMsgReciver)) {
                    oldMsgReciver = 0;
                }
                let newMsgSender = oldMsgSender + 1;
                let newMsgReciver = oldMsgReciver + 1;
                userMap.set(sender, newMsgSender);
                userMap.set(reciver, newMsgReciver);

                if (newMsgSender >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    userMap.delete(sender);
                }
                if (newMsgReciver >= capacity) {
                    console.log(`${reciver} reached the capacity!`);
                    userMap.delete(reciver);
                }
                break;
            case 'Empty':
                let emptyName = iteratorArray[0];
                if (emptyName === "All") {
                    userMap.clear();
                } else {
                    userMap.delete(emptyName);
                }
                break;
            case 'Statistics':
                console.log(`Users count: ${userMap.size}`);
                for (let [key, value] of userMap) {
                    console.log(`${key} - ${value}`);
                }
                flag = true;
                break;
        }
        if (flag) {
            break;
        }
    }
}
message(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Viki",
    "Message=Viki=Paco",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Message=Paco=Amy",
    "Statistics",
])