let expect = require("chai").expect;

const lookupChar = require("../03.Char-Lookup");

describe('lookUpChar', function () {
    it('(13, 0) should return undefined', function () {
        expect(lookupChar(13, 0)).to.be.equal(undefined);
    });
    it('("pesho", "gosho") should return undefined', function () {
        expect(lookupChar("pesho", "gosho")).to.be.equal(undefined);
    });
    it('("pesho", 3.14) should return undefined', function () {
        expect(lookupChar("pesho", 3.14)).to.be.equal(undefined);
    });
    it('("pesho", 15) should return "Incorrect index"', function () {
        expect(lookupChar("pesho", 15)).to.equal("Incorrect index");
    });
    it('("pesho", -1) should return "Incorrect index', function () {
        expect(lookupChar("pesho", -1)).to.equal("Incorrect index");
    });
    it('("pesho", 5) should return "Incorrect index"', function () {
        expect(lookupChar("pesho", 5)).to.equal("Incorrect index");
    });
    it('("pesho", 0) should return "p"', function () {
        expect(lookupChar("pesho", 0)).to.equal("p");
    });
    it('("stamat", 3) should return "m"', function () {
        expect(lookupChar("stamat", 3)).to.equal("m");
    });
});