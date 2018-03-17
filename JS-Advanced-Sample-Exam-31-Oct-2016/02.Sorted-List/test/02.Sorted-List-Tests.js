const expect = require("chai").expect;

const SortedList = require("../02.Sorted-List");

describe("Test SortedList Class", function () {
    let list;

    beforeEach(function () {
        list = new SortedList();
    });

    //Check if Properties exist
    it("Check for all the properties", function () {
        expect(list.hasOwnProperty('list')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('sort')).to.be.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
    });

    //Check add func
    describe('Test add.function', function () {
        it('list.add()', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add();
            expect(list.list.join(', ')).to.be.equal('');
        });
        it('list.add(5)(6)(7)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(list.list.join(', ')).to.be.equal('5, 6, 7');
        })
    });

    //Check remove func
    describe('Test remove.function', function () {
        it('list.remove()', function () {
            expect(list.list.join(', ')).to.be.equal('');
            expect(()=>list.remove()).to.throw(Error);
        });
        it('list.remove(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.remove(-1)).to.throw(Error);
        });
        it('list.remove(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.remove(3)).to.throw(Error);
        });
        it('list.remove(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            list.remove(1);
            expect(list.list.join(', ')).to.be.equal('5, 7')
        });
    });

    //Check get func
    describe('Test get.function', function () {
        it('list.remove()', function () {
            expect(list.list.join(', ')).to.be.equal('');
            expect(()=>list.get()).to.throw(Error);
        });
        it('list.get(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.get(-1)).to.throw(Error);
        });
        it('list.get(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.get(3)).to.throw(Error);
        });
        it('list.get(valid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(list.get(1)).to.be.equal(6)
        });
    });

    //Check vrfyRange func
    describe('Test vrfyRange.function', function () {
        it('list.vrfyRange()', function () {
            expect(list.list.join(', ')).to.be.equal('');
            expect(()=>list.vrfyRange()).to.throw(Error);
        });
        it('list.vrfyRange(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.vrfyRange(-1)).to.throw(Error);
        });
        it('list.vrfyRange(invalid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(()=>list.vrfyRange(3)).to.throw(Error);
        });
        it('list.vrfyRange(valid index)', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(list.vrfyRange(1)).to.be.equal()
        });
    });

    //Test size func
    describe('Test size.getter', function () {
        it('list.size with empty list shoult return 0', function () {
            expect(list.list.join(', ')).to.be.equal('');
            expect(list.size).to.be.equal(0)
        });
        it('list.size with normal list shoult return 0', function () {
            expect(list.list.join(', ')).to.be.equal('');
            list.add(6);list.add(7);list.add(5);
            expect(list.size).to.be.equal(3)
        });
       //expect(list.list.join(', ')).to.be.equal('');
       //list.add(6);list.add(7);list.add(5);
       //expect(list.vrfyRange(1)).to.be.equal()
    });
});