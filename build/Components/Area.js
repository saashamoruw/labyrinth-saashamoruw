"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
/*
Represents an area in the labyrinth
*/
class Area {
    constructor(name, description, item, hazard, surroundings) {
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
        console.log("This is ", this.name);
        this.printDescription();
        if (this.item === undefined) {
            console.log("There are no items in this room");
        }
        else {
            console.log("In this room there may or may not be " + this.item);
        }
        if (!this.hazard.haveOvercome()) {
            this.printHazardDescription();
        }
    }
    /*
    Shows just the description of the area
    */
    printDescription() {
        console.log(this.description);
    }
    /**
     * Checks if the area is the exit to the labyrinth
     */
    isExit() {
        if (this.name === "exit") {
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
    /**
     * Gets the new area to move to in the direction provided
     */
    moveTo(direction) {
        let newAreaKey = this.surroundings.moveInDirection(direction);
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