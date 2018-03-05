let expect = require("chai").expect;

let createCalculator = require("../07.Add-Subtract");

describe("Add-Subtract", function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("(+3, +2)Should return 5", function () {
        calc.add(3);
        calc.add(2);
        expect(calc.get()).to.be.equal(5);
    });
    it("(-3, -2)Should return -5", function () {
        calc.subtract(3);
        calc.subtract(2);
        expect(calc.get()).to.be.equal(-5);
    });
    it("(4.5, 3.1)Should return 1.4", function () {
        calc.add(4.5);
        calc.subtract(3.1);
        expect(calc.get()).to.be.equal(1.4);
    });
    it("Should return 5", function () {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("Should return 5", function () {
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("Should return 5", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);
    });
});
