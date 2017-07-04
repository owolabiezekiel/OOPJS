'use strict';

class Profession {
    constructor(placeOfWork, toolMostUsed, strength) {
        this.placeOfWork = placeOfWork;
        this.toolMostUsed = toolMostUsed;
        this.strengthLevel = strength;
    }
    canFightBattle() {
        if (this.strengthLevel == "Very Strong") {
            console.log("This Profession can fight Battle");
        } else {
            console.log("This Profession is not fit for battle");
        }
    }
}

class Soldier extends Profession {
    // if this class is initialised without parameters, the default parameters are used
    constructor(placeOfWork = "not specified", toolMostUsed = "not specified", strength = "not specified") {
        super(placeOfWork, toolMostUsed, strength);
        this.strengthLevel = strength;
    }
}

let tobi = new Soldier("Battle Field", "Gun", "Very Strong");
console.log(tobi.placeOfWork);
console.log(tobi.strengthLevel);
console.log(tobi.canFightBattle());

let Dave = new Profession("Home", "Computer", "Weak");
console.log(Dave.canFightBattle());