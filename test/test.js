'use strict';

let expect = require('chai').expect;

const Soldier = require('../main/oop.js').Soldier;

describe("Soldier Class: Create Soldier class and test ability to go to war", () => {
    it("The the soldier class should be a property of the profession class with value of This profession can fight battle", () => {
        let tobi = new Soldier("Battle Field", "Gun", "Very Strong");
        expect(tobi.canFightBattle()).to.equal("This Profession can fight Battle");
    });
    it("The the soldier class should be a property of the profession class with value of This profession can not fight battle", () => {
        let dave = new Soldier("Battle Field", "Gun", "Weak");
        expect(dave.canFightBattle()).to.equal("This Profession is not fit for battle");
    });
});