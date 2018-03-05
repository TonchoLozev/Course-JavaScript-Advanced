let expect = require("chai").expect;
const SYMMETRY_CHECK_FUNC = require("../05.Check-for-Symmetry");
describe("Symmetry tests", function () {
    it("[1, 2, 3]should return false", function () {
        expect(SYMMETRY_CHECK_FUNC([1, 2, 3])).to.be.equal(false);
    });
    it("[1, 2, 'test] should return false", function () {
        expect(SYMMETRY_CHECK_FUNC([1, 2, 'test'])).to.be.equal(false);
    });
    it("[{}, 2, {}] should return false", function () {
        expect(SYMMETRY_CHECK_FUNC([{}, 2, {}])).to.be.equal(true);
    });
    it("[1, 2, 1]should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([1, 2, 1])).to.be.equal(true);
    });
    it("[]should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([])).to.be.equal(true);
    });
    it("[1]should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([1])).to.be.equal(true);
    });
    it("['asdsa', 2, 'asdsa']should return true", function () {
        expect(SYMMETRY_CHECK_FUNC(['asdsa', 2, 'asdsa'])).to.be.equal(true);
    });
    it("'asdsa' should return false", function () {
        expect(SYMMETRY_CHECK_FUNC('asdsa')).to.be.equal(false);
    });
    it(" 1, 2, 3 should return false", function () {
        expect(SYMMETRY_CHECK_FUNC(1, 2, 3)).to.be.equal(false);
    });
    it("[-1, 2, -1] should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([-1, 2, -1])).to.be.equal(true);
    });
    it("[-1, 2, 1] should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([-1, 2, 1])).to.be.equal(false);
    });
    it("[true, 1] should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([true, 1])).to.be.equal(false);
    });
    it("[5,'hi',{a:5},new Date(),{X:5},'hi',5] should return false", function () {
        expect(SYMMETRY_CHECK_FUNC([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false);
    });
    it("[5,'hi',{a:5},new Date(),{a:5},'hi',5]  should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.equal(true);
    });
    it("[1,2,3,3,2,1]  should return true", function () {
        expect(SYMMETRY_CHECK_FUNC([1,2,3,3,2,1] )).to.be.equal(true);
    });
    it("[1,2] should return false", function () {
        expect(SYMMETRY_CHECK_FUNC([1,2])).to.be.equal(false);
    });
});
