function solve(input) {
    let operateObjects = (function () {
        let store = {};
        return {
            create: function (arr) {
                if (arr.length > 2) {
                    store[arr[0]] = Object.create(store[arr[2]]);
                } else {
                    store[arr[0]] = {};
                }
            },
            set: function (arr) {
                store[arr[0]][arr[1]] = arr[2];
            },
            print: function (arr) {
                let result = [];
                let obj = store[arr[0]];
                for (let key in obj) {
                    result.push(key +':' + obj[key]);
                }
                console.log(result.join(', '))
            }
        }
    })();

    for (let i = 0; i < input.length; i++) {
        let inputCommands = input[i].split(' ');
        let cmd = inputCommands.shift();
        operateObjects[cmd](inputCommands);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);