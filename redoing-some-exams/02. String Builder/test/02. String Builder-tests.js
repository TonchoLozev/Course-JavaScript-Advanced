const expect = require("chai").expect;

const StringBuilder = require("../02. String Builder");

describe("Test class StringBuilder", function () {
    let builder;
    beforeEach(() => {
        builder = new StringBuilder();
    });

    //Check if all funxtions exists
    it('Check function existence', function () {
        expect(builder.hasOwnProperty('_stringArray')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true);
        expect(StringBuilder.hasOwnProperty('_vrfyParam')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true);
    });

    //Check constructor
    describe('Testing consturctor', function () {
        //Check with valid property
        it('Test contructor', function () {
            builder = new StringBuilder('jorj');
            expect(builder._stringArray.join('')).to.be.equal('jorj');
            expect(builder._stringArray.length).to.be.equal(4);
        });
        //Check constructor with empty property
        it('Test contructor', function () {
            expect(builder._stringArray.join('')).to.be.equal('');
            expect(builder._stringArray.length).to.be.equal(0);
        });
        //Check constructor with invalid property
        it('Test contructor', function () {
            expect(()=>builder = new StringBuilder({jorjo:123})).to.throw(TypeError)
        });
    });

    //Check append
    describe('Testing append functions', function () {

        //Check appending with valid parameter
        it('builder.append("Hello") should return "Hello"', function () {
            builder = new StringBuilder('!!');
            expect(builder._stringArray.length).to.be.equal(2);
            builder.append('Hello');
            expect(builder._stringArray.join('')).to.be.equal('!!Hello');
            expect(builder._stringArray.length).to.be.equal(7);
        });
        //Check appending with invalid parameter
        it('builder.append({jorjo:123}) should return "Hello"', function () {
            expect(()=>builder.append({jotjo:123})).to.throw(TypeError);
        });
        //Check appending with empty parameter
        it('builder.append() should return "Hello"', function () {
            expect(()=>builder.append()).to.throw(TypeError);
        });
    });

    //Check prepend
    describe('Testing prepend function', function () {

        //Check prepending with valid parameter
        it('builder.append("Hello") should return "Hello"', function () {
            builder = new StringBuilder('jorj');
            expect(builder._stringArray.length).to.be.equal(4);
            builder.prepend('Hello ');
            expect(builder._stringArray.join('')).to.be.equal('Hello jorj');
            expect(builder._stringArray.length).to.be.equal(10);
        });
        //Check prepending with invalid parameter
        it('builder.append({jorjo:123}) should return "Hello"', function () {
            expect(()=>builder.prepend({jotjo:123})).to.throw(TypeError);
        });
        //Check prepending with empty parameter
        it('builder.append() should return "Hello"', function () {
            expect(()=>builder.prepend()).to.throw(TypeError);
        });
    });

    //Check insertArt
    describe('Test insertAt function', function () {

        //Check insertAt with valid parameter
        it('builder.append("Hello") should return "Hello"', function () {
            builder = new StringBuilder('jorj');
            expect(builder._stringArray.length).to.be.equal(4);
            builder.insertAt('Hello ', 2);
            expect(builder._stringArray.join('')).to.be.equal('joHello rj');
            expect(builder._stringArray.length).to.be.equal(10);
        });
        //Check insertAt with invalid parameter
        it('builder.append({jorjo:123}) should return "Hello"', function () {
            builder = new StringBuilder('jorj');
            expect(()=>builder.insertAt({jotjo:123}, 2)).to.throw(TypeError);
        });
        //Check insertAt with empty parameter
        it('builder.append() should return "Hello"', function () {
            builder = new StringBuilder('jorj');
            expect(()=>builder.insertAt()).to.throw(TypeError);
        });
    });

    //Check remove
    describe('Test remove function', function () {
        //Ceheck with valid parameters
        it('builder.remove(2, 3)', function () {
            builder = new StringBuilder('Hello jorj!!');
            builder.remove(2, 3);
            expect(builder._stringArray.join('')).to.be.equal('He jorj!!');
            expect(builder._stringArray.length).to.be.equal(9);
        })
    });

    //Check toString
    describe('Test toString function', function () {
        it('builder.toStirng()', function () {
            builder = new StringBuilder('Hello jorj!!');
            expect(builder.toString()).to.be.equal('Hello jorj!!');
        });
        it('builder.toString())', function () {
            expect(builder.toString()).to.be.equal('');
        })
    })
});
