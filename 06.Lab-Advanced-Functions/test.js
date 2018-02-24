function invokeAll(functionsArr) {
    for (let func of functionsArr) {
        func();
    }
}

//let last = function() { console.error("last"); };
//invokeAll([() => console.info('first'), () => console.warn('second'), last]);

function reduce(arr, func) {
    let result = arr[0];
    for(let currentNum of arr.slice(1)){
        result = func(result, currentNum);
    }
    return result;
}

//console.log(reduce([1, 2, 3, 4], (a, b) => a * b));

function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
function getDollarsFormatter(formatter) {
    return function (value) {
        return formatCurrency(',', '$', true, value);
    }
}
function getEuroFormatter(formatter) {
    return function (value) {
        return formatCurrency(',', 'Euro', false, value);
    }
}
//let dollarsFormatter = getDollarsFormatter(formatCurrency);
//let euroFormatter = getEuroFormatter(formatCurrency);

function processCommands(arr) {
    let process = (function () {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text =
                text.slice(0, text.length - count),
            print: () => console.log(text)

        }
    })();
    for(let cmd of arr){
        let [command, count] = cmd.split(' ');
        process[command](count);
    }
}

processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);