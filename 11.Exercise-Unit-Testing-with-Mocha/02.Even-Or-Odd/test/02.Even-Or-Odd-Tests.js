let expect = require("chai").expect;

const isOddOrEven= require("../02.Even-Or-Odd");

describe('isEvenOrOdd', function () {
   it('(13) should return undefined', function () {
       expect(isOddOrEven(13)).to.be.equal(undefined);
   });
    it('({name: pesho}) should return undefined', function () {
        expect(isOddOrEven(13)).to.be.equal(undefined);
    });
    it('("roar" should return odd', function () {
        expect(isOddOrEven('roar')).to.be.equal('even');
    });
    it('("pesho" should return odd', function () {
        expect(isOddOrEven('pesho')).to.be.equal('odd');
    });
    it('("cat", "alabala", "is it even" should return odd, odd, even', function () {
        expect(isOddOrEven('cat')).to.be.equal('odd');
        expect(isOddOrEven('alabala')).to.be.equal('odd');
        expect(isOddOrEven('is it even')).to.be.equal('even');
    });

});
