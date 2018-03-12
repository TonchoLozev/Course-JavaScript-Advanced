class Stringer {
    constructor(string, length) {
        this.innerString  = string;
        this.innerLength = length;
    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        if (this.innerLength - n < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= n;
        }
    }

    toString() {
        let str = this.innerString;
        if (this.innerString.length > this.innerLength) {
            if (this.innerLength === 0) {
                str = '...';
            } else {
                str = this.innerString.substr(0, this.innerLength) + '...';
            }
        }
        return str;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
