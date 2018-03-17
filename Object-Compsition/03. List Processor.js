function solveArrCommands(arrayOfFuncs) {
    let objCommands = {
        array: [],
        add: function (str) {
            this.array.push(str);
        },
        remove : function (str) {
            this.array = this.array.filter(a => a!==str)
        },
        print: function () {
            console.log(this.array.join(','))
        }
    };
    for(let cmds of arrayOfFuncs){
        let [command, string] = cmds.split(' ');
        objCommands[command](string);
    }
}
solveArrCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);