function solution(arr) {
    let executeCommands = (function () {
        let array = [];
        function add(str) {
            array.push(str);
        }
        function remove(str) {
            array = array.filter(ch => ch !== str);
        }
        function print() {
            console.log(array.join(','));
        }
        return {add, remove, print};
    })();
    for (let i = 0; i < arr.length; i++) {
        let [command, string] = arr[i].split(' ');
        executeCommands[command](string);
    }
}

solution(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);