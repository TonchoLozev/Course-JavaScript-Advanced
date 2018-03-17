const expect = require("chai").expect;

const StringBuilder = require("../02.String-Builder");

describe('StringBuilder Unit Tests', function () {

    let builder;
    beforeEach(() => {
        builder = new StringBuilder();
    });

    //instantiate the builder with and without parameters
    describe('Calling builder with and without parameters', function () {

        //without parameters
        it('builder() should return ""', function () {
            expect(builder.toString()).to.be.equal('');
            expect(builder._stringArray.length).to.be.equal(0)
        });

        //with parameters
        it('builder("pesho") should return "pesho"', function () {
            builder = new StringBuilder('pesho');
            expect(builder.toString()).to.be.equal('pesho');
            expect(builder._stringArray.length).to.be.equal(5)
        });

        //with invalid parameters
        it('builder({jorj: 24})(7) should return exception', function () {
            expect(() => builder = new StringBuilder({jorj: 24})).to.throw(TypeError);
        })
    });

    //test append function
    describe('Testing append function', function () {

        //testing with valid paramteres
        it('builder(ab).append( cd) should return "ab cd"', function () {
            builder = new StringBuilder('ab');
            expect(builder._stringArray.length).to.be.equal(2);
            builder.append(' cd');
            expect(builder.toString()).to.be.equal('ab cd');
            expect(builder._stringArray.length).to.be.equal(5);
        });

        //testing with invalid paramteres
        it('builder(ab).append([]) should return exception', function () {
            builder = new StringBuilder('ab');
            expect(builder._stringArray.length).to.be.equal(2);
            expect(() => builder.append([])).to.throw(TypeError);
        })
    });

    //test prepend
    describe('Testing prepend function', function () {

        //testing with valid paramteres
        it('builder(ab).append( cd) should return "ab cd"', function () {
            builder = new StringBuilder('ab');
            expect(builder._stringArray.length).to.be.equal(2);
            builder.prepend('cd ');
            expect(builder.toString()).to.be.equal('cd ab');
            expect(builder._stringArray.length).to.be.equal(5);
        });

        //testing with invalid paramteres
        it('builder(ab).append([]) should return exception', function () {
            builder = new StringBuilder('ab');
            expect(builder._stringArray.length).to.be.equal(2);
            expect(() => builder.prepend([])).to.throw(TypeError);
        })
    });

    //test insertAt
    describe('Testing insertAt function', function () {

        //testing tith valid parameters
        it('builder(abc).insertAt("jorjo", 1) should return ajorjobc ', function () {
            builder = new StringBuilder('abc');
            expect(builder._stringArray.length).to.be.equal(3);
            builder.insertAt('jorjo', 1);
            expect(builder.toString()).to.be.equal('ajorjobc');
            expect(builder._stringArray.length).to.be.equal(8);
        });

        //testing with invalid parameters
        it('builder(abc).insertAt(123, 1) should return exception ', function () {
            builder = new StringBuilder('abc');
            expect(builder._stringArray.length).to.be.equal(3);
            expect(() => builder.insertAt(123, 1)).to.be.throw(TypeError);
        })
    });

    //test remove
    describe('Testing remove function', function () {

        //testing with valid parameters
        it('builder(tazmaniiski).remove(2, 4) should return taiiski', function () {
            builder = new StringBuilder('tazmaniiski');
            expect(builder._stringArray.length).to.be.equal(11);
            builder.remove(2, 4);
            expect(builder.toString()).to.be.equal('taiiski');
            expect(builder._stringArray.length).to.be.equal(7);
        });

    });

    //test if method exist in the class
    describe('Testing if given functionality exist in the clas', function () {
        it('does append exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });
        it('does prepend exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });
        it('does insertAt exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it('does remove exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it('does toString exist', function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
        it('does _stringArray exist', function () {
            expect(builder._stringArray !== undefined).to.be.equal(true);
        });
    })
});