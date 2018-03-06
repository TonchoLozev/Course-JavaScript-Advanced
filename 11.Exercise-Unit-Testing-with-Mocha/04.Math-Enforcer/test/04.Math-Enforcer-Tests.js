let expect = require("chai").expect;

const mathEnforcer = require("../04.Math-Enforcer");

describe('mathEnforcer', function () {
    it('addFive("asdsa"), ({name: "pesho"}), ([2, 3]) should return undefined', function () {
        expect(mathEnforcer.addFive("asdsa")).to.be.equal(undefined);
        expect(mathEnforcer.addFive({name: "pesho"})).to.be.equal(undefined);
        expect(mathEnforcer.addFive([2, 3])).to.be.equal(undefined);
    });
    it('subtractTen("asdsa"), ({name: "pesho"}), ([2, 3]) should return undefined', function () {
        expect(mathEnforcer.subtractTen("asdsa")).to.be.equal(undefined);
        expect(mathEnforcer.subtractTen({name: "pesho"})).to.be.equal(undefined);
        expect(mathEnforcer.subtractTen([2, 3])).to.be.equal(undefined);
    });
    it('sum("asdsa", 2), ({name: "pesho"}, 2), ([2, 3], 2) should return undefined', function () {
        expect(mathEnforcer.sum("asdsa", 2)).to.be.equal(undefined);
        expect(mathEnforcer.sum({name: "pesho"}, 2)).to.be.equal(undefined);
        expect(mathEnforcer.sum([2, 3], 2)).to.be.equal(undefined);
    });
    it('sum(2, "asdsa"), (2, {name: "pesho"}), (2, [2, 3]) should return undefined', function () {
        expect(mathEnforcer.sum(2, "asdsa")).to.be.equal(undefined);
        expect(mathEnforcer.sum(2, {name: "pesho"})).to.be.equal(undefined);
        expect(mathEnforcer.sum(2, [2, 3])).to.be.equal(undefined);
    });
    it('addFive(0) should return 5', function () {
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
    });
    it('addFive(-5) should return 0', function () {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });
    it('addFive(-3.14) should return 1.86', function () {
        expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
    });
    it('subtractTen(10) should return 0', function () {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
    });
    it('subtractTen(-10) should return -20', function () {
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });
    it('subtractTen(3.14) should return -6.86', function () {
        expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
    });
    it('sum(3, 3) should return 6', function () {
        expect(mathEnforcer.sum(3, 3)).to.be.equal(6);
    });
    it('sum(3, -3) should return 0', function () {
        expect(mathEnforcer.sum(3, -3)).to.be.equal(0);
    });
    it('sum(-3, 3) should return 0', function () {
        expect(mathEnforcer.sum(-3, 3)).to.be.equal(0);
    });
    it('sum(-3, -3) should return -6', function () {
        expect(mathEnforcer.sum(-3, -3)).to.be.equal(-6);
    });
    it('sum(3.14, 3) should return 6.14', function () {
        expect(mathEnforcer.sum(3.14, 3)).to.be.closeTo(6.15, 0.01);
    });
    it('sum(3.14, -3) should return 0.15', function () {
        expect(mathEnforcer.sum(3.14, -3)).to.be.closeTo(0.15, 0.01);
    });
    it('sum(-3.14, -3) should return -6.15', function () {
        expect(mathEnforcer.sum(-3.14, -3)).to.be.closeTo(-6.15, 0.01);
    });
    it('addFive(-6.14) should return -1.14', function () {
        expect(mathEnforcer.addFive(-6.14)).to.be.closeTo(-1.14, 0.01);
    });
    it('subtract(-6.14) should return -16.14', function () {
        expect(mathEnforcer.subtractTen(-6.14)).to.be.closeTo(-16.14, 0.01);
    });
});