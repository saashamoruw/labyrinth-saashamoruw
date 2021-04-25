"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labyrinth = void 0;
const Area_1 = require("./Components/Area");
const Hazard_1 = require("./Components/Hazard");
const Surroundings_1 = require("./Components/Surroundings");
const Inventory_1 = require("./Components/Inventory");
/*
Labyrinth keeps track of all the elements of the game, and updates them as game goes on.
*/
class Labyrinth {
    /*
    Constructs all the areas and initializes all labyrinth elements
    */
    constructor() {
        let blueprint = require('../map.json');
        const startingArea = "entry";
        let map = new Map();
        for (const key in blueprint) {
            const value = blueprint[key];
            let hazard = new Hazard_1.Hazard(value.hazard, value.hazardkey);
            let surrounding = new Surroundings_1.Surroundings(value.neighbor.north, value.neighbor.south, value.neighbor.east, value.neighbor.west);
            let area = new Area_1.Area(value.name, value.description, value.item, hazard, surrounding);
            map.set(key, area);
        }
        this.gameMap = map;
        this.inventory = new Inventory_1.Inventory();
        this.prevArea = map.get(startingArea);
        this.currArea = map.get(startingArea);
        this.start = map.get(startingArea);
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
    Displays the description of the area the player is currently in
    */
    showAreaDescription() {
        this.currArea.printDescription();
    }
    /**
     * Shows the items currently in the inventory
     */
    showInventory() {
        this.inventory.showInventory();
    }
    /**
     * Gets the item from the area and adds it to the inventory
     */
    getItem(item) {
        return this.inventory.getItem(this.currArea, item);
    }
    /**
     * Uses the item from the inventory to use on a hazard in the area
     */
    useItem(item) {
        return this.inventory.useItem(this.currArea, item);
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
}
exports.Labyrinth = Labyrinth;
//# sourceMappingURL=Labyrinth.js.map