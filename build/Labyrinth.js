"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Labyrinth = void 0;
const Area_1 = require("./Components/Area");
const Hazard_1 = require("./Components/Hazard");
const Surroundings_1 = require("./Components/Surroundings");
const Inventory_1 = require("./Components/Inventory");
const Monster_1 = require("./Components/Monster");
/*
Labyrinth keeps track of all the elements of the game, and updates them as game goes on.
*/
class Labyrinth {
    /*
    Constructs all the areas and initializes all labyrinth elements
    */
    constructor() {
        this.gameMap = this.constructMap();
        const startingArea = this.gameMap.get("entry");
        if (startingArea === undefined) {
            throw new Error('Could not initialize Labyrinth map');
        }
        this.inventory = new Inventory_1.Inventory();
        this.monster = new Monster_1.Monster(Array.from(this.gameMap.keys()), "exit");
        this.startArea = startingArea;
        this.prevArea = startingArea;
        this.currArea = startingArea;
    }
    /*
    prints out the description of Area where player starts
    */
    startLabyrinth() {
        this.startArea.print();
    }
    /*
    Enables the player to move through the Labyrinth
    Player can go back to where they last came from no matter the Hazards
    But, the player cannot move if the monster is in the area
    To be able to move in any other direction, the player has to have overcome the hazard
    */
    makeMoveAndCheckSafety(direction) {
        if (direction === "back" && !this.isMonsterInArea()) {
            this.setCurrAndPrevAreas(this.prevArea, this.currArea);
            this.showAreaInformation();
        }
        else if (this.safeFromHazardAndNoDeadEnd(direction)) {
            let newArea = this.gameMap.get(this.currArea.moveTo(direction));
            if (newArea !== undefined) {
                this.setCurrAndPrevAreas(newArea, this.currArea);
                this.showAreaInformation();
            }
            else {
                console.log("Invalid direction");
            }
        }
        return this.checkWin();
    }
    showAreaInformation() {
        this.currArea.print();
        if (this.isMonsterInArea()) {
            this.monster.print();
        }
    }
    /*
    Displays the description of the area the player is currently in
    */
    showAreaDescription() {
        if (!this.isMonsterInArea()) {
            this.monster.move();
        }
        this.currArea.printDescription();
    }
    /**
     * Shows the items currently in the inventory
     */
    showInventory() {
        if (!this.isMonsterInArea()) {
            this.monster.move();
        }
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
     * If the hazard is in the exit and the player overcomes it then they win the game
     * If the hazard is a monster then the player has one chance to use the
     * correct item, if they don't have it or if it is the wrong item, the player
     * loses the game
     */
    useItem(item) {
        if (!this.isMonsterInArea()) {
            this.monster.move();
            return this.inventory.useItem(this.currArea, item);
        }
        else {
            return this.useItemOnMonster(item);
        }
    }
    /****************************HELPER FUNCTIONS***************************/
    checkWin() {
        if (this.currArea.getKey() === "exit" && this.inventory.checkIfItemExists("treasure")) {
            console.log('Congratulations! You have won the game');
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Uses hardcoded JSON file to construct labyrinth
     */
    constructMap() {
        let blueprint = require('../game-details/map.json');
        let map = new Map();
        for (const key in blueprint) {
            const value = blueprint[key];
            let hazard = new Hazard_1.Hazard(value.hazard, value.hazardkey);
            let surrounding = new Surroundings_1.Surroundings(value.neighbor.north, value.neighbor.south, value.neighbor.east, value.neighbor.west);
            let area = new Area_1.Area(key, value.name, value.description, value.item, hazard, surrounding);
            map.set(key, area);
        }
        return map;
    }
    /**
     * Current and Previous areas are set as per parameters
     * Also triggers the monster to move
    */
    setCurrAndPrevAreas(setToCurrArea, setToPrevArea) {
        this.currArea = setToCurrArea;
        this.prevArea = setToPrevArea;
        // move the monster every time the player moves
        if (!this.isMonsterInArea()) {
            this.monster.move();
        }
    }
    /*
    Checks if the player is currently in danger and has not overcome the hazard in the area
    If the player is not currently in danger, the direction is checked for validity of a dead end
    */
    safeFromHazardAndNoDeadEnd(direction) {
        if (this.isMonsterInArea()) {
            this.monster.print();
            return false;
        }
        else if (!this.currArea.ifHazardPassed()) {
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
    /**
     * Indicates if the wandering monster is in the players area
     */
    isMonsterInArea() {
        return (!this.monster.haveOvercome() && (this.monster.currentLocation() === this.currArea.getKey()));
    }
    /**
     * Uses an item to slay the monster
     * Also determines if the player can continue the game or has lost
     */
    useItemOnMonster(item) {
        if (!this.inventory.checkIfItemExists(item)) {
            // player doesn't have item - loses game
            console.log('You got eaten by the monster');
            return false;
        }
        else if (!this.monster.overcomeHazard(item)) {
            // wrong item to slay monster - loses game
            console.log('You got eaten by the monster');
            return false;
        }
        else {
            this.monster.died();
            this.inventory.removeItemFromInventory(item);
            return true;
        }
    }
}
exports.Labyrinth = Labyrinth;
//# sourceMappingURL=Labyrinth.js.map