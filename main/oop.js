'use strict';

class Profession {
    constructor(placeOfWork, toolMostUsed, strength) {
        this.placeOfWork = placeOfWork;
        this.toolMostUsed = toolMostUsed;
        this.strengthLevel = strength;
    }
    canFightBattle() {
        if (this.strengthLevel == "Very Strong") {
            return ("This Profession can fight Battle");
        } else {
            return ("This Profession is not fit for battle");
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



module.exports = {
    Soldier: Soldier
};