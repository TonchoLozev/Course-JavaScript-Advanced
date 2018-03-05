let expect = require("chai").expect;

let rgbToHexColor = require("../06.RGB-to-Hex");

describe("RGB tests", function () {
    it("(255, 158, 170) should return #FF9EAA", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it("(0, 0, 0) should return #000000", function () {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });
    it("(12, 13, 14) should return #0C0D0E", function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
    });
    it("(255, 255, 255) should return #FFFFFF", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it("(-1, 0, 0) should return undefined", function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
    it("(0, -1, 0) should return undefined", function () {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it("(0, 0, -1) should return undefined", function () {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it("(256, 0, 0) should return undefined", function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });
    it("(0, 256, 0) should return undefined", function () {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });
    it("(0, 0, 256) should return undefined", function () {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});
