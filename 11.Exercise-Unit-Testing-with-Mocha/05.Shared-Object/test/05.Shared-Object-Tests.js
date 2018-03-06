let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = require('../05.Shared-Object');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('test sharedObject', function () {
    describe('Inital name/income value tests', function () {
        it('test name initial value should be null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value should be null', function () {
            expect(sharedObject.income).to.be.null;
        })
    });
    describe('change name', function () {
        it('changeName("") should not make change', function () {
            sharedObject.changeName('Pesho');
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('Pesho');
            expect($('#name').val()).to.be.equal('Pesho');
        });
        it('changeName("pesho") should be "pesho"', function () {
            sharedObject.changeName('gosho');
            sharedObject.changeName('pesho');
            expect(sharedObject.name).to.be.equal('pesho');
            expect($('#name').val()).to.be.equal('pesho');
        });
        it('changeName(15) should be 15', function () {
            sharedObject.changeName(15);
            expect(sharedObject.name).to.be.equal(15);
            expect($('#name').val()).to.be.equal("15");
        });
    });
    describe('change income', function () {
        it('changeIncome("") should not make change', function () {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome('');
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal('6');
        });
        it('changeIncome(-5) should not make change', function () {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal(`6`);
        });
        it('changeIncome(0) should not make change', function () {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal(`6`);
        });
        it('changeIncome(5) should be 5', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
            expect($('#income').val()).to.be.equal('5');
        });
        it('changeIncome(3.37) should not make change', function () {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome(3.37);
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal(`6`);
        });
        it('changeIncome("GEORGI") should not make change', function () {
            sharedObject.changeIncome(6);
            sharedObject.changeIncome("GEORGI");
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal(`6`);
        });
    });
    describe('update name', function () {
        it('updateName() textbox = "Goshkicha" should make change', function () {
            sharedObject.changeName("Ivan");
            $("#name").val('Goshkicha');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Goshkicha");
            expect($('#name').val()).to.be.equal('Goshkicha');
        });
        it('updateName() textbox = "" should not make change', function () {
            sharedObject.changeName("Ivan");
            $("#name").val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Ivan");
            expect($('#name').val()).to.be.equal('');
        });
    });
    describe('update income', function () {
        it('updateIncome() textbox = "Goshkicha" should not make change', function () {
            sharedObject.changeIncome(6);
            $("#income").val('Goshkicha');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal('Goshkicha');
        });
        it('updateIncome() textbox = "-4" should not make change', function () {
            sharedObject.changeIncome(6);
            $("#income").val('-4');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal('-4');
        });
        it('updateIncome() textbox = "4.43" should not make change', function () {
            sharedObject.changeIncome(6);
            $("#income").val('4.43');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal('4.43');
        });
        it('updateIncome() textbox = "0" should not make change', function () {
            sharedObject.changeIncome(6);
            $("#income").val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6);
            expect($('#income').val()).to.be.equal('0');
        });
        it('updateIncome() textbox = "54" should make change', function () {
            sharedObject.changeIncome(6);
            $("#income").val('54');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(54);
            expect($('#income').val()).to.be.equal('54');
        });
    });
});