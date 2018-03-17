(function () {
    String.prototype.ensureStart = function (str) {
        let string = this.toString();
        if (string.substr(0, str.length) !== str) {
            string = str + string;
        }
        return string;
    };
    String.prototype.ensureEnd = function (str) {
        let string = this.toString();
        if (string.substr(string.length - str.length) !== str) {
            string = string + str;
        }
        return string;
    };
    String.prototype.isEmpty = function () {
        let string = this.toString();
        if (string.length > 0) {
            return false;
        } else {
            return true;
        }
    };
    String.prototype.truncate = function (n) {
        let string = this.toString();
        if (string.length < n) {
            return string;
        } else {
            let stringTokens = string.split(' ');
            if (stringTokens.length > 1) {
                while (true) {
                    if (string.length <= n) {
                        break;
                    }
                    stringTokens.pop();
                    string = stringTokens.join(' ') + '...';
                }
                return string;
            } else {
                if (n < 4) {
                    return '.'.repeat(n);
                } else {
                    string = string.substr(0, string.length - 3);
                    return string + '...';
                }
            }
        }
    };
    String.format = function () {
        let string = arguments[0];
        let regex = /{.}/g;
        let arrayOfWords = Array.from(arguments);
        arrayOfWords.shift();
        let match = regex.exec(string);
        let count = 0;
        while (match) {
            if (count < arrayOfWords.length){
                string = string.replace(match[0], arrayOfWords[count]);
            }
            count++;
            match = regex.exec(string);
        }
        return string;
    }
})();
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

console.log(str);