(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    };
    Array.prototype.skip = function (n) {
        return this.filter(element => element !== n);
    };
    Array.prototype.take = function (n) {
        let array = [];
        for (let i = 0; i <n; i++) {
            array.push(this[i])
        }
        return array;
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b) / this.length;
    }
})()

let myArr = [1, 2, 3];
console.log(myArr.take(2)[0]);
console.log(myArr.skip(2)[1]);
