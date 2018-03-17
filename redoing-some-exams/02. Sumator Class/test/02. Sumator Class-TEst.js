const expect = require("chai").expect;

const Sumator = require("../02. Sumator Class");

describe("Test class Sumator", function () {
    let sumator;
    beforeEach(() => {
        sumator = new Sumator();

    });

    //Check does all funtion exists
    it("Check function existence", function () {
        expect(sumator.hasOwnProperty('data')).to.be.equal(true);
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.be.equal(true);
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.be.equal(true);
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.be.equal(true);
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.be.equal(true);
    });

    describe('Test function add', function () {
        it('sumator.add() should return empty string/array', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add();
            expect(sumator.data.join(', ')).to.be.equal('');
        });
        it('sumator.add(4)("jorjo")({msg:123}) should return 4, jorjo, msg:123', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add(4);
            sumator.add("jorjo");
            sumator.add({msg: 123});
            expect(sumator.data.join(', ')).to.be.equal('4, jorjo, [object Object]');
        })
    });
    describe('Test function sumNums', function () {
        it('sumator.sumNums() should return 0', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add();
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('sumator.add(4)("jorjo")({msg:123})(6) should return 10', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add(4);
            sumator.add("jorjo");
            sumator.add({msg: 123});
            sumator.add(6);
            expect(sumator.sumNums()).to.be.equal(10);
        });
        it('sumator.add(4)(6)(3) should return 10', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add(4);
            sumator.add(6);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(13);
        });
        it('sumator.add("jorj")([])({msg:123}) should return 10', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add("jorj");
            sumator.add([]);
            sumator.add({msg: 123});
            expect(sumator.sumNums()).to.be.equal(0);
        });
    });

    describe('Test function removeByFilter', function () {
        it('sumator.rmoveByFilter() should return ""', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add();
            sumator.removeByFilter(a => a % 2 === 0);
            expect(sumator.data.join(', ')).to.be.equal('');
        });
        it('sumator.rmoveByFilter() should return 0', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            sumator.add('jorjo');
            for (let i = 0; i < 10; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter(a => a % 2 === 0);
            expect(sumator.data.join(', ')).to.be.equal('jorjo, 1, 3, 5, 7, 9');
        });
        it('sumator.rmoveByFilter() should return 0', function () {
            expect(sumator.data.join(', ')).to.be.equal('');
            for (let i = 0; i < 5; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter(a => a > 5);
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4');
        });
    });

    //Test to string()
    describe('Test toString function', function () {
        it('test with empty arr', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });
        it('test with correct arr', function () {
            sumator.add(4);
            sumator.add("jorjo");
            sumator.add({msg: 123});
            sumator.add(6);
            expect(sumator.toString()).to.be.equal('4, jorjo, [object Object], 6')
        })
    })
});