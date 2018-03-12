let expect = require("chai").expect;

const Console = require("../05.C#-Console");

describe('Console.WriteLine', function () {
    //IF
    //Check for 1 parameter which is OBJECT or STRING
    it('Console.writeLine({tonkata:123}) should return "{"tonkata":123}")', function () {
        let test = Console.writeLine({tonkata: 123});
        let result = JSON.stringify({tonkata: 123});
        expect(test).to.be.equal(result);
    });
    it('Console.writeLine("tonkata: 123") should return "tonkata: 123")', function () {
        let test = Console.writeLine("tonkata: 123");
        let result = "tonkata: 123";
        expect(test).to.be.equal(result);
    });
    it('Console.writeLine({tonkata:123, jorkata:323}) should return {"tonkata":123, "jorkata":323}")', function () {
        let test = Console.writeLine({tonkata: 123, jorkata: 323});
        let result = JSON.stringify({tonkata: 123, jorkata: 323});
        expect(test).to.be.equal(result);
    });

    //Check for zero parameters
    it('Console.writeLine() should throw TypeError)', function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });

    //ELSE
    //Check for more than 1 parameters

    //Check is msg === string
    it('Console.writeLine({tonkata:2323}, 2, 3) should throw TypeError)', function () {
        expect(() => Console.writeLine({tonkata: 2323}, 2, 3)).to.throw(TypeError);
    });
    it('Console.writeLine(2323, 2, 3) should throw TypeError)', function () {
        expect(() => Console.writeLine({tonkata: 2323}, 2, 3)).to.throw(TypeError);
    });

    //Check if parameters are more than placeholders
    it('Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7, 8) should throw RangeError)', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7, 8)).to.throw(RangeError);
    });

    //Check if placeholders are more than parameters
    it('Console.writeLine("The sum of {0} and {1} is {2} {4}", 3, 4, 7) should throw RangeError")', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {2} {4}", 3, 4, 7)).to.throw(RangeError);
    });

    //Check if placeholders indexes are not equal to parameters
    it('Console.writeLine("The sum of {0} and {1} is {6}", 3, 4, 7) should throw RangeError")', function () {
        expect(() => Console.writeLine("The sum of {0} and {1} is {6}", 3, 4, 7)).to.throw(RangeError);
    });

    //Check if placeholders indexes are not valid
    it('Console.writeLine("The sum of {0} and {0} is {0}", 3, 4, 7) should throw RangeError")', function () {
        expect(() => Console.writeLine("The sum of {0} and {0} is {0}", 3, 4, 7)).to.throw(RangeError);
    });

    //Check if parameters are equal to the  placeholders
    it('Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7) should return "The sum of 3 and 4 is 7")', function () {
        let test = Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7);
        let result = "The sum of 3 and 4 is 7";
        expect(test).to.be.equal(result);
    });
    it('Console.writeLine("The sum of {0} and {1} is {2}", "jorko", "goshko", "vankata") should return "The sum of jorko and goshko is vankata")', function () {
        let test = Console.writeLine("The sum of {0} and {1} is {2}", "jorko", "goshko",  "vankata");
        let result = "The sum of jorko and goshko is vankata";
        expect(test).to.be.equal(result);
    });
});