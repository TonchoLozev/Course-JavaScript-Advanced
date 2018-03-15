const expect = require("chai").expect;

const makeList = require("../02. Add Left-Righ-Clear in List");

describe("TODO …", function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("TODO …", function () {
    })
});

describe('makeList Test', function () {
    let myList = {};
    beforeEach(() => {
        myList = makeList();
    });

    describe('Does functions exists?!', function () {
        //does addLeft exists
        it('all functions', function () {
            expect(myList.hasOwnProperty('addLeft')).to.be.equal(true);
            expect(myList.hasOwnProperty('addRight')).to.be.equal(true);
            expect(myList.hasOwnProperty('clear')).to.be.equal(true);
            expect(myList.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
    //test add left
    describe('Does makeList.addLeft() works', function () {
        it('makeList.addLeft(4)(6) should return 6, 4', function () {
            myList.addLeft(4);
            myList.addLeft(6);
            expect(myList.toString()).to.be.equal('6, 4')
        });
        it('makeList.addLeft() should return ""', function () {
            myList.addLeft();
            expect(myList.toString()).to.be.equal('')
        });
    });
    //test add right
    describe('Does makeList.addRight() works', function () {
        it('makeList.addRigth(4)(6) should return 4, 6', function () {
            myList.addRight(4);
            myList.addRight(6);
            expect(myList.toString()).to.be.equal('4, 6')
        });
        it('makeList.addLeft() should return ""', function () {
            myList.addRight();
            expect(myList.toString()).to.be.equal('')
        });
    });
    //test clear
    describe('Does makeList.clear() works', function () {
        it('makeList.clear() should return ""', function () {
            myList.addRight(4);
            myList.addRight(6);
            myList.clear();
            expect(myList.toString()).to.be.equal('')
        });
        it('makeList.addLeft() should return""', function () {
            myList.clear();
            expect(myList.toString()).to.be.equal('')
        });
    });
});