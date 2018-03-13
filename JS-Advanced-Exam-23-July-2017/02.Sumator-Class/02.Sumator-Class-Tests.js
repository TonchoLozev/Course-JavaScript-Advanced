const expect = require("chai").expect;

const Sumator = require("./02.Sumator-Class");

describe('Sumator Unit Test', function () {
    let sumator;
    beforeEach(() => {
        sumator = new Sumator();
    });

    describe('add elements to the data', function () {

        //Add nums
        it('sumator.data.push(1, 2) should return 1, 2', function () {
            sumator.data.push(1);
            sumator.data.push(2);
            expect(sumator.data.join(', ')).to.be.equal('1, 2')
        });

        //Add string
        it('sumator.data.push("pesho", "jorjo") should return pesho, jorjo', function () {
            sumator.data.push('pesho');
            sumator.data.push('jorjo');
            expect(sumator.data.join(', ')).to.be.equal('pesho, jorjo')
        });

        // Add mixed
        it('sumator.data.push("pesho", 1, {peshko: 123}) should return pesho, 1, [object Object]', function () {
            sumator.data.push('pesho');
            sumator.data.push('1');
            sumator.data.push({peshko: 123});
            expect(sumator.data.join(', ')).to.be.equal('pesho, 1, [object Object]')
        });
    });

    describe('sum nums of the data', function () {

        //empty data
        it('empty data should return sum = 0', function () {
            expect(sumator.sumNums()).to.be.equal(0);
        });

        //data contains only numbers
        it('data[1, 2, 3, 4, 5, 6] should return sum = 21', function () {
            for (let i = 1; i <= 6; i++) {
                sumator.add(i);
            }
            expect(sumator.sumNums()).to.be.equal(21);
        });

        //only strings or objects
        it('data[{pesho:123}, "Joro di Baste", "k"] should return sum = 0',function () {
            sumator.add({pesho:123});
            sumator.add("Joro di Baste");
            sumator.add("k");
            expect(sumator.sumNums()).to.be.equal(0);
        });

        //if data contains mixed types
        it('data[{pesho:123}, 1, "Joro di Baste", "k", 2, 4] should return sum = 0',function () {
            sumator.add({pesho:123});
            sumator.add(1);
            sumator.add("Joro di Baste");
            sumator.add("k");
            sumator.add(2);
            sumator.add(4);
            expect(sumator.sumNums()).to.be.equal(7);
        });
    });

    describe('remove by filter of the data', function () {

        //if filter is correct and can remove from data
        it('list.removeByFilter(x => x % 2 === 0)[1, 2, 3, 4, 5, 6, 7] should return [1, 3, 5, 7]', function () {
            for (let i = 1; i <= 7; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.join(', ')).to.be.eq('1, 3, 5, 7');
        });

        //if filter does'nt remove data
        it('list.removeByFilter(x => x > 5)[1, 2, 3, 4, 5] should return [1, 2, 3, 4, 5]', function () {
            for (let i = 1; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x > 5);
            expect(sumator.data.join(', ')).to.be.eq('1, 2, 3, 4, 5');
        });
    });

    describe('sumator.toString() function', function () {

        //if data is empty
        it('data[] should return (empty)', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        });

        it('data[1, 2, "jorjo"] should return 1, 2, jorjo', function () {
            sumator.add(1);
            sumator.add(2);
            sumator.add('jorjo');
            expect(sumator.toString()).to.be.equal('1, 2, jorjo')
        })
    });

    describe('check if function and data exist', function () {
        //check if data exist
        it('data is not defined', function () {
            expect(sumator.data !== undefined).to.be.equal(true);
        });

        //check if add exist
        it('does add func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        //check if sum exist
        it('does sum func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        //check if removeByFilter exist
        it('does removeByFilter func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        //check if toString exist
        it('does toString func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        })
    })
});