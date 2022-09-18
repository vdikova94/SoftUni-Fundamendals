function passwordValidator(password) {
    let numeralCount = 0;
    let incorectFlag = false;

    if (typeof(password) === "string") {
        for (let i = 0; i < password.length; i++) {
            let elementAscciCode = password.charCodeAt(i);
            if (elementAscciCode >= 48 && elementAscciCode <= 57) {
                numeralCount += 1;
            } else if (!((elementAscciCode >= 65 && elementAscciCode <= 90) || (elementAscciCode >= 97 && elementAscciCode <= 122))) {
                incorectFlag = true;
            }
        }

        let needCharFlag = false;
        let needNumFlag = false;

        if (password.length < 6 || password.length > 10) {
            needCharFlag = true;
            console.log(`Password must be between 6 and 10 characters`);
        }

        if (incorectFlag || password.length === 0) {
            console.log(`Password must consist only of letters and digits`);
        }

        if (numeralCount < 2) {
            needNumFlag = true;
            console.log(`Password must have at least 2 digits`);
        }

        if (!incorectFlag && !needCharFlag && !needNumFlag) {
            console.log(`Password is valid`);
        }
    } else {
        return;
    }
}
passwordValidator('Picture')