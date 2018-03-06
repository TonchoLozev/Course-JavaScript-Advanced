let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = require('../06.ArmageDOM');

describe("function nuke", function () {
    let targetHtml;
    beforeEach(function() {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some <span>more</span> text</span>
                </div>
            </div>`
        targetHtml = $('#target');
    });
    it("should do nothing if selectors is invalid", function () {
        let selector1 = $('.target');
        let selector2 = 2;
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.equal(oldHtml);
    });
    it("should do nothing if selectors is invalid", function () {
        let selector1 = 2;
        let selector2 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.equal(oldHtml);
    });
    it("should do nothing if selectors are equal", function () {
        let selector = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector, selector);
        expect(targetHtml.html()).to.equal(oldHtml);
    });
    it("should do nothing if only one selector is passed", function () {
        let selector1 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1);
        expect(targetHtml.html()).to.equal(oldHtml);
    });
    it("should remove html if selectors are valid", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.not.equal(oldHtml);
    });
    it("should not remove html if selectors are valid", function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
});