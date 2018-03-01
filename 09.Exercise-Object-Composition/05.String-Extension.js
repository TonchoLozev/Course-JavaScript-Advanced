(function () {
    String.prototype.ensureStart = function (str) {
        let text = this.toString();
        if (this.substr(0, str.length) !== str) {
            return str.concat(text);
        }
        return text;
    };
    String.prototype.ensureEnd = function (str) {
        let text = this.toString();
        if (this.substr(this.length - str.length) !== str) {
            return text.concat(str);
        }
        return text;
    };
    String.prototype.isEmpty = function () {
        if (this.length !==0) {
            return false;
        }
        return true;
    };
    String.prototype.truncate = function (n) {
        let text = this.toString();
        if (text.length < n) {
            return text;
        } else {
            while (true) {
                if (text.length <= n) {
                    break;
                }
                if (text.substr(text.length - 3) === '...') {
                    text = text.substr(0, text.length - 3);
                }
                (function () {
                    let splited = text.split(' ');
                    if (splited.length > 1) {
                        splited.pop();
                        text = splited.reduce((a, b) => a + ' ' + b);
                        text += '...';
                    } else {
                        if (n < 4) {
                            text = '.'.repeat(n)
                        } else {
                            text = text.substr(0, text.length - 4);
                            text += '...';
                        }
                    }
                })();
            }
            return text;
        }
    };
    String.format = function () {
        let text = arguments[0];
        let arrWords = [];
        for (let i = 1; i < arguments.length; i++) {
            arrWords.push(arguments[i]);
        }
        let regex = /{[0-9]}/g;
        let match = regex.exec(text);
        let countWords = 0;
        while(match){
            if(countWords < arrWords.length){
                text = text.replace(match[0], arrWords[countWords]);
            }
            match = regex.exec(text);
            countWords++;
        }
        return text;
    }
})();

let testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(10);
console.log(testString);

testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(25);
console.log(testString);

testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(43);
console.log(testString);

testString = 'the quick brown fox jumps over the lazy dog';
testString = testString.truncate(45);
console.log(testString);

