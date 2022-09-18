function password(input) {
    let passwordPattern = /\>(?<number>[0-9]+)\|(?<lowerCase>[a-z]+)\|(?<upperCase>[A-Z]+)\|(?<symbol>[^<>]*)\</gm;
    let passwordCount = input.shift();
    for (let pass of input) {
        if (pass.match(passwordPattern)) {

            let symbols = pass.split(passwordPattern);
            let startSymbol = symbols.shift();
            let endSymbol = symbols.pop();

            if (startSymbol === endSymbol) {
                console.log(`Password: ${symbols.join('')}`);
            } else {
                console.log(`Try another password!`);
            }
        } else {
            console.log(`Try another password!`);
        }
    }
}
password
    (["5",
        ">111|mqu|BAU|mqu< ",
        "()>111!aaa!AAA!^&*<()",
        "o>088|abc|AAA|***<o",
        "asd>asd|asd|ASD|asd<asd",
        "*>088|zzzz|ZzZ|123<*"
    ])


console.log(`-----------------`);

password(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
])