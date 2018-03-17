function objectFuncs(arrayOfCommands) {
    let obj = {
        object: {},
        create: function () {
            let args = arguments[0];
            if (args.length === 1) {
                this.object[args[0]] = {}
            } else {
                this.object[args[0]] = Object.create(this.object[args[2]]);
            }
        },
        set: function () {
            let args = arguments[0];
            this.object[args[0]][args[1]] = args[2];
        },
        print: function (objToPrint) {
            let arrToRpint = [];
            for(let prop in this.object[objToPrint]){
                arrToRpint.push(`${prop}:${this.object[objToPrint][prop]}`)
            }
            console.log(arrToRpint.join(', '))
        }

    };
    for (let commands of arrayOfCommands) {
        let commandTokens = commands.split(' ');
        let command = commandTokens.shift();
        obj[command](commandTokens);
    }
}

objectFuncs(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);


