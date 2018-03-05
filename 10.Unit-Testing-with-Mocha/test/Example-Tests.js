function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
let expect = require("chai").expect;
describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return NaN", function() {
        expect(sum([1, 'asdsa'])).to.be.NaN;
    });
    it("should return -2 for [-1, -1]", function() {
        expect(sum([-1, -1])).to.be.equal(-2);
    });
    it("should return 4 for [-1, 5]", function() {
        expect(sum([-1, 5])).to.be.equal(4);
    });
    it("should return 1 for [1]", function() {
        expect(sum([1])).to.be.equal(1);
    });
    it("should return 0 for []", function() {
        expect(sum([])).to.be.equal(0);
    });
});
