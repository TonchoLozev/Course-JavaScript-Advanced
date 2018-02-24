function processCommand(arr) {
    let commandProcess = (function () {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();
    for(let cmd of arr){
        let [command, count] = cmd.split(' ');
        commandProcess[command](count);
    }
}

processCommand(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);
