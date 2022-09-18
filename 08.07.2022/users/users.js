function companyUsersId(companyUsersList) {
    let companys = new Map();


    for (let element of companyUsersList) {
        let [company, user] = element.split(' -> ');
        let users = new Set();

        if (companys.has(company)) {
            let anotherUsers = companys.get(company);
            anotherUsers.add(user);
            companys.set(company, anotherUsers);
        } else {
            users.add(user);
            companys.set(company, users);
        }
    }

    let sortedCompanysNames = Array.from(companys.entries()).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));


    for (let [key, value] of sortedCompanysNames) {
        console.log(key);
        for (let user of value) {
            console.log(`-- ${user}`);
        }
    }
}
companyUsersId(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]

)