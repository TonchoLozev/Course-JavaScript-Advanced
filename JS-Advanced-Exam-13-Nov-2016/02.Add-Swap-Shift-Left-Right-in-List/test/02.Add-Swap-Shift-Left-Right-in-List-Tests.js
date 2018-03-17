const expect = require("chai").expect;

const createList = require("../02. Add - Swap - Shift Left - Right in List");

describe('Sumator Unit Test', function () {
    let list;
    beforeEach(() => {
        list = createList();
    });

    //check if all functions exist
    describe('Test if functions of list exist', function () {
        it('check add.function', function () {
            expect(list.hasOwnProperty('add')).to.be.equal(true);
        });
        it('check shiftLeft.function', function () {
            expect(list.hasOwnProperty('shiftLeft')).to.be.equal(true);
        });
        it('check shiftRight.function', function () {
            expect(list.hasOwnProperty('shiftRight')).to.be.equal(true);
        });
        it('check swap.function', function () {
            expect(list.hasOwnProperty('swap')).to.be.equal(true);
        });
        it('check toString.function', function () {
            expect(list.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    //check if add works
    describe('Test list.add functions', function () {

        //without params
        it('list.add() should return ""', function () {
            expect(list.toString()).to.be.equal('');
            list.add();
            expect(list.toString()).to.be.equal('');
        });

        //with params
        it('list.add() should return ""', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({Goshko: 2});
            expect(list.toString()).to.be.equal('2, pesho, [object Object]');
        })
    });

    //check if shiftleft() works
    describe('Test list.shiftLeft()', function () {

        //check without params
        it('list().shiftLeft() should return ""', function () {
            expect(list.toString()).to.be.equal('');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('');
        });

        //check with params

        //with only 1 param
        it('list("pesho").shiftLeft() should return "pesho"', function () {
            expect(list.toString()).to.be.equal('');
            list.add('pesho');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('pesho');
        });

        //with more params
        it('list("pesho", 2, {gosho:2}).shiftLeft() should return "pesho"', function () {
            expect(list.toString()).to.be.equal('');
            list.add('pesho');
            list.add(2);
            list.add({gosho: 2});
            expect(list.toString()).to.be.equal('pesho, 2, [object Object]');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('2, [object Object], pesho');
        })
    });

    //check if shiftRight() works
    describe('Test list.shiftRight()', function () {

        //check without params
        it('list().shiftRight() should return ""', function () {
            expect(list.toString()).to.be.equal('');
            list.shiftRight();
            expect(list.toString()).to.be.equal('');
        });

        //check with params

        //with only 1 param
        it('list("pesho").shiftRight() should return "pesho"', function () {
            expect(list.toString()).to.be.equal('');
            list.add('pesho');
            list.shiftRight();
            expect(list.toString()).to.be.equal('pesho');
        });

        //with more params
        it('list("pesho", 2, {gosho:2}).shiftLeft() should return "pesho"', function () {
            expect(list.toString()).to.be.equal('');
            list.add('pesho');
            list.add(2);
            list.add({gosho: 2});
            expect(list.toString()).to.be.equal('pesho, 2, [object Object]');
            list.shiftRight();
            expect(list.toString()).to.be.equal('[object Object], pesho, 2');
        })
    });

    //check swap
    describe('Test list.swap()', function () {

        //check if swap works
        it('list(2)("pesho")({gosho: 2}).swap(0, 2) should return "[object Object], pesho, 2"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(0, 2);
            expect(list.toString()).to.be.equal('[object Object], pesho, 2')
        });

        ////check if swap return true
        it('list(2)("pesho")({gosho: 2}).swap(0, 2) should return true"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(0, 2)).to.be.equal(true);
        });

        ////check if swap works with second invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, 3) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(0, 3);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        ////check if swap return false with second invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, 3) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(0, 3)).to.be.equal(false);
        });

        ////check if swap works with first invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, 3) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(-3, 2);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        ////check if swap return false with first invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, 3) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(-3, 2)).to.be.equal(false);
        });

        /////////////////////////////////

        ////check if swap works with second invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, -2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(0, -2);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        ////check if swap return false with second invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(0, -2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(0, -2)).to.be.equal(false);
        });

        ////check if swap works with first invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(4, 2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(4, 2);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        ////check if swap return false with first invalid parameter
        it('list(2)("pesho")({gosho: 2}).swap(4, 2 should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(4, 2)).to.be.equal(false);
        });

        ////////////////////////////////////////////////

        //check swap with string
        it('list(2)("pesho")({gosho: 2}).swap(4, 2 should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap('peshko', 2)).to.be.equal(false);
        });

        it('list(2)("pesho")({gosho: 2}).swap(4, 2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap('peshko', 2);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        it('list(2)("pesho")({gosho: 2}).swap(4, 2 should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(2, 'peshko')).to.be.equal(false);
        });

        it('list(2)("pesho")({gosho: 2}).swap(4, 2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(2, 'peshko');
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });

        it('list(2)("pesho")({gosho: 2}).swap(2, 2) should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            list.swap(2, 2);
            expect(list.toString()).to.be.equal('2, pesho, [object Object]')
        });
        it('list(2)("pesho")({gosho: 2}).swap(4, 2 should return false"', function () {
            expect(list.toString()).to.be.equal('');
            list.add(2);
            list.add('pesho');
            list.add({gosho: 2});
            expect(list.swap(2, 2)).to.be.equal(false);
        });
    });
    
    //check toString

});
