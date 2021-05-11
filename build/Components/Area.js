"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const Constants_1 = require("./Constants");
/*
Represents an area in the labyrinth
*/
class Area {
    constructor(key, name, description, item, hazard, surroundings) {
        this.key = key;
        this.name = name;
        this.description = description;
        this.item = item;
        this.hazard = hazard;
        this.surroundings = surroundings;
    }
    /*
    Shows all the information about the area
    */
    print() {
        console.log("\nThis is", this.name.toUpperCase());
        this.printDescription();
        if (this.item === undefined) {
            console.log("There are no items in this room");
        }
        else {
            console.log("In this room there may or may not be " + this.item);
        }
        this.showPossibleDirections();
    }
    /*
    Shows just the description of the area
    */
    printDescription() {
        console.log(this.description);
    }
    getKey() {
        return this.key;
    }
    /**
     * Checks if the area is the exit to the labyrinth
     */
    isExit() {
        if (this.key === Constants_1.EXIT) {
            return true;
        }
        return false;
    }
    /**
     * Checks if the item is present in the area
     */
    hasItem(item) {
        if (item === this.item) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Shows the hazard currently in the area
     */
    printHazardDescription() {
        this.hazard.print();
    }
    /**
     * Checks if the hazard in the area has been overcome or not
     */
    ifHazardPassed() {
        return this.hazard.haveOvercome();
    }
    /**
     * Uses the item to overcome the hazard, if it is the valid item for the area
     */
    overcomeHazard(item) {
        return this.hazard.overcomeHazard(item);
    }
    getHazardKey() {
        return this.hazard.getHazardKey();
    }
    showPossibleDirections() {
        this.surroundings.doorways();
    }
    /**
     * Gets the new area to move to in the direction provided
     */
    moveTo(direction) {
        let newAreaKey = this.surroundings.getAreaInDirection(direction);
        if (newAreaKey === undefined) {
            return "";
        }
        else {
            return newAreaKey;
        }
    }
}
exports.Area = Area;
//# sourceMappingURL=Area.js.map