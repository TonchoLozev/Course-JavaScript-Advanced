(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.filter(element => element !== n);
    };
    Array.prototype.take = function (n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(this[i]);
        }
        return arr;
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {

        let sum = this.reduce((a, b) => a + b);
        return sum / this.length;
    }
})();

let mayArr = [1, 2, 3, 4, 5, 6, 3];

console.log(mayArr.last());
console.log(mayArr.skip(3));
console.log(mayArr.take(3));
console.log(mayArr.sum());
console.log(mayArr.average());