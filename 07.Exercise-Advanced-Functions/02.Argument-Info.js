function result() {
    let argumentsCount = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let argumentType = typeof arguments[i];
        let argumentValue = arguments[i];
        console.log(argumentType + ': ' + argumentValue);
        if (!argumentsCount.has(argumentType)) {
            argumentsCount.set(argumentType, 1);
        } else {
            argumentsCount.set(argumentType, argumentsCount.get(argumentType) + 1)
        }
    }
    let sortArguments = Array.from(argumentsCount).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }

    });
    for(let arg of sortArguments){
        console.log(arg[0] + ' = ' + arg[1]);
    }
}

result({ name: 'bob'}, 3.333, 9.999);