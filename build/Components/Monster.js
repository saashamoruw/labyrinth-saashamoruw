"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
/**
 * Represents a monster that randomly wanders the game map
 */
class Monster {
    constructor(areas, currArea) {
        this.areas = areas;
        this.currArea = currArea;
        this.overcome = false;
        this.description = "A big scary monster who likes to eat humans for fun has entered the room. The only thing that can slay it is an offering of cake :)";
        this.key = "cake";
        this.nextArea = this.areas.length - 1;
    }
    /**
     * Moves the monster through the labyrinth
     */
    move() {
        // Moves the monster to a random area in the map
        // let newArea = this.areas[Math.floor(Math.random() * this.areas.length)];
        // Moves the monster one room at a time
        this.changeNextArea();
        let newArea = this.areas[this.nextArea];
        this.currArea = newArea;
        // console.log("Monster just moved to ", newArea)
    }
    /**
     * Returns the name of the current area the monster is in
     */
    currentLocation() {
        return this.currArea;
    }
    /**
     * Shows a victory message when the monster has been slayed
     */
    died() {
        console.log('Yay! You are a strong, monster slayer. Go you!');
    }
    /**
    * Uses the item to overcome the hazard
    */
    overcomeHazard(item) {
        if (item === this.key) {
            this.overcome = true;
            return true;
        }
        return false;
    }
    /**
     * Checks if the hazard has been overcome
     */
    haveOvercome() {
        return this.overcome;
    }
    /**
     * Shows the nature of the hazard
     */
    print() {
        console.log(this.description);
    }
    changeNextArea() {
        if (this.nextArea === 0) {
            this.nextArea = this.areas.length - 1;
        }
        else {
            this.nextArea = this.nextArea - 1;
        }
    }
}
exports.Monster = Monster;
//# sourceMappingURL=Monster.js.map