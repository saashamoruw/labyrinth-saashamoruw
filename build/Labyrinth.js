"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labyrinth = void 0;
const Area_1 = require("./Components/Area");
const Hazard_1 = require("./Components/Hazard");
const Surroundings_1 = require("./Components/Surroundings");
/*
Labyrinth keeps track of all the elements of the game, and updates them as game goes on.
*/
class Labyrinth {
    /*
    Constructs all the areas and initializes all labyrinth elements
    */
    constructor() {
        let blueprint = require('../map.json');
        let map = new Map();
        for (const key in blueprint) {
            const value = blueprint[key];
            let hazard = new Hazard_1.Hazard(value.hazard, value.hazardkey);
            let surrounding = new Surroundings_1.Surroundings(value.neighbor.north, value.neighbor.south, value.neighbor.east, value.neighbor.west);
            let area = new Area_1.Area(value.name, value.description, value.item, hazard, surrounding);
            map.set(key, area);
        }
        this.gameMap = map;
        this.prevArea = map.get("entry");
        this.currArea = map.get("entry");
        this.inventory = [];
        this.start = map.get("entry");
    }
    /*
    prints out the description of Area where player starts
    */
    startLabyrinth() {
        this.start.print();
    }
    /*
    Enables the player to move through the Labyrinth
    Player can go back to where they last came from no matter the Hazards
    To be able to move in any other direction, the player has to have overcome the hazard
    and the direction should not lead to a dead end
    */
    makeMoveAndCheckSafety(direction) {
        if (direction === "back") {
            this.setCurrAndPrevAreas(this.prevArea, this.currArea);
            this.currArea.print();
        }
        else if (this.safeFromHazardAndNoDeadEnd(direction)) {
            let newArea = this.gameMap.get(this.currArea.moveTo(direction));
            if (newArea !== undefined) {
                this.setCurrAndPrevAreas(newArea, this.currArea);
                this.currArea.print();
            }
            else {
                console.log("Invalid direction");
            }
        }
        return true;
    }
    /*
    item is taken from the Area and saved to the invenotry.
    */
    getItem(item) {
        if (this.inventory.indexOf(item) > -1) {
            console.log("You have already taken this item");
        }
        else if (this.currArea.hasItem(item)) {
            this.inventory.push(item);
            console.log(item, " has been added to your inventory");
        }
        else {
            console.log("This item is not in this room");
        }
        return true;
    }
    /*
    Player can use an item currently in their inventory
    This also checks if the item used can overcome the hazard in the area
    If the hazard overcome is at the exit, the player wins the game
    */
    useItem(item) {
        let index = this.inventory.indexOf(item);
        if (index === -1) {
            console.log("This item does not exist in your inventory");
        }
        else if (this.currArea.overcomeHazard(item)) {
            console.log("You have overcome this hazard!");
            this.removeItemFromInventory(index);
            // If this area was the exit then player wins the game
            if (this.currArea.isExit()) {
                return false;
            }
        }
        else {
            console.log("You cannot overcome this hazard with this item.");
        }
        return true;
    }
    /*
    Shows all the items in the player inventory
    */
    showInventory() {
        console.log(this.inventory.toString());
    }
    /*
    Displays the description of the area the player is currently in
    */
    showAreaDescription() {
        this.currArea.printDescription();
    }
    /*
    Checks if the player is currently in danger and has not overcome the hazard in the area
    If the player is not currently in danger, the direction is checked for validity of a dead end
    */
    safeFromHazardAndNoDeadEnd(direction) {
        if (!this.currArea.ifHazardPassed()) {
            this.currArea.printHazardDescription();
            return false;
        }
        else if (this.currArea.moveTo(direction) === "") {
            console.log('There is a dead end in this direction, try another one');
            return false;
        }
        else {
            return true;
        }
    }
    /*
    Current and Previous areas are set as per parameters
    */
    setCurrAndPrevAreas(setToCurrArea, setToPrevArea) {
        this.currArea = setToCurrArea;
        this.prevArea = setToPrevArea;
    }
    /*
    Removes item from inventory after use
    */
    removeItemFromInventory(index) {
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }
}
exports.Labyrinth = Labyrinth;
//# sourceMappingURL=Labyrinth.js.map