function employe(names) {
    let employes = [];

    for (const name of names) {
        const employe = {
            name,
            personalNum: name.length,
        }

        employes.push(employe);
    }

    employes.forEach(employe => {
        console.log(`Name: ${employe.name} -- Personal Number: ${employe.personalNum}`)
    });
}

employe([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);