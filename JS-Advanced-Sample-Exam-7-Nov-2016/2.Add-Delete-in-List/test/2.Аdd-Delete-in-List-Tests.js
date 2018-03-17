const expect = require("chai").expect;

const list = require("../2.Add-Delete-in-List");

describe('Test list.functions', function () {
    describe('Test list.functions', function () {

        describe('Check if functions exists', function () {
            it('check all functions', function () {
                expect(list.hasOwnProperty('add')).to.be.equal(true);
                expect(list.hasOwnProperty('delete')).to.be.equal(true);
                expect(list.hasOwnProperty('toString')).to.be.equal(true);
            })
        });

        describe('Check if add.functions works', function () {
            it('list.add(4)(6) shoul//d return 4, 6', function () {
                expect(list.toString()).to.be.equal('');
                list.add(4);
                list.add(6);
                list.add(7);
                list.add(8);
                expect(list.toString()).to.be.equal('4, 6, 7, 8');
            });
            //it('list.add() should return ""', function () {
            //    expect(list.toString()).to.be.equal('4, 6');
            //    list.add();
            //    //expect(list.toString()).to.be.equal('4, 6');
            //})
        });
        describe('Check if delete.functions works', function () {
            it('list.delete("sadsa") should return unddefined', function () {
                expect(list.delete('sds')).to.be.equal(undefined);
            });
            it('list.delete(-43) should return unddefined', function () {
                expect(list.delete(-43)).to.be.equal(undefined);
            });
            it('list.delete(5) should return unddefined', function () {
                expect(list.delete(999999)).to.be.equal(undefined);
            });
            it('list.delete(3) should return unddefined', function () {
                expect(list.delete(3)).to.be.equal(8);
            });
            it('list.delete(1) should return unddefined', function () {
                list.delete(1);
                expect(list.toString()).to.be.equal('4, 7');
            })
        });
        describe('Check toString.func', function () {
            it('toString should return 4, 6, 7', function () {
                expect(list.toString()).to.be.equal('4, 7')
            })
        });
    });
});