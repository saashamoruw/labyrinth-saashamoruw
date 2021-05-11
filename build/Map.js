"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neighbors = exports.Hazard = exports.Area = exports.GameMap = void 0;
class GameMap {
    constructor() {
        let blueprint = require('../map.json');
        this.areas = Object.keys(blueprint);
        this.gameObject = blueprint;
        let map = new Map();
        for (const key in blueprint) {
            const value = blueprint[key];
            let hazard = new Hazard(value.hazard, value.hazardkey);
            let neighbors = new Neighbors(value.neighbor.north, value.neighbor.south, value.neighbor.east, value.neighbor.west);
            let area = new Area(value.name, value.description, value.item, hazard, neighbors);
            map.set(key, area);
        }
        this.gameMap = map;
        this.prevArea = map.get("entry");
        this.currArea = map.get("entry");
        this.inventory = [];
        this.start = map.get("entry");
        this.end = map.get("exit");
        console.log(map);
    }
    startLabyrinth() {
        this.start.printDescription();
    }
    getItem(item) {
        if (this.currArea.hasItem(item)) {
            this.inventory.push(item);
        }
        else {
            console.log("This item is not in this room");
        }
        return true;
    }
    useItem(item) {
        // if the item exists in inventory
        // if needed to pass trap then pass it
        if (this.inventory.indexOf(item) === -1) {
            console.log("This item does not exist in your inventory");
        }
        if (this.currArea.overcomeHazard(item)) {
            console.log("You have overcome this hazard!");
        }
        else {
            console.log("You cannot overcome this hazard with this item.");
        }
        return true;
    }
    makeMoveAndCheckSafety(direction) {
        if (direction === "back") {
            let curr = this.currArea;
            this.currArea = this.prevArea;
            this.prevArea = curr;
            this.currArea.printDescription();
        }
        else if (!this.currArea.ifHazardPassed()) {
            console.log("You are still in danger!");
            this.currArea.printHazardDescription();
        }
        else if (this.currArea.moveTo(direction) === "") {
            console.log('There is a dead end in this direction, try another one');
        }
        else {
            let newArea = this.gameMap.get(this.currArea.moveTo(direction));
            if (newArea !== undefined) {
                this.prevArea = this.currArea;
                this.currArea = newArea;
                this.currArea.printDescription();
            }
            else {
                console.log("Invalid direction");
            }
            if (this.currArea.isExit()) {
                console.log("Congratulations!");
                return false;
            }
        }
        return true;
    }
}
exports.GameMap = GameMap;
class Area {
    constructor(name, description, item, hazard, neighbors) {
        this.name = name;
        this.description = description;
        this.item = item;
        this.hazard = hazard;
        this.neighbors = neighbors;
    }
    printDescription() {
        console.log("This is ", this.name);
        console.log(this.description);
        if (this.item === undefined) {
            console.log("There are no items in this room");
        }
        else {
            console.log("In this room there is " + this.item);
        }
        if (!this.hazard.haveOvercome()) {
            console.log("You are in danger. ", this.hazard.print());
        }
    }
    isExit() {
        if (this.name === "exit") {
            return true;
        }
        return false;
    }
    overcomeHazard(item) {
        return this.hazard.overcomeHazard(item);
    }
    ifHazardPassed() {
        return this.hazard.haveOvercome();
    }
    printHazardDescription() {
        this.hazard.print();
    }
    moveTo(direction) {
        let newAreaKey = this.neighbors.moveInDirection(direction);
        if (newAreaKey === undefined) {
            return "";
        }
        else {
            return newAreaKey;
        }
    }
    hasItem(item) {
        if (item === this.item) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Area = Area;
class Hazard {
    constructor(description, key) {
        this.description = description;
        this.key = key;
        this.overcame = false;
        if (key === undefined) {
            this.overcame = true;
        }
    }
    overcomeHazard(item) {
        if (item === this.key) {
            this.overcame = true;
            return true;
        }
        return false;
    }
    haveOvercome() {
        return this.overcame;
    }
    print() {
        console.log("Hazard: ", this.description);
    }
}
exports.Hazard = Hazard;
class Neighbors {
    constructor(north, south, east, west) {
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }
    moveInDirection(direction) {
        switch (direction.toLowerCase()) {
            case "north": {
                return this.getNorth();
            }
            case "south": {
                return this.getSouth();
            }
            case "east": {
                return this.getEast();
            }
            case "west": {
                return this.getWest();
            }
            default: {
                return undefined;
            }
        }
    }
    getNorth() {
        return this.north;
    }
    getSouth() {
        return this.south;
    }
    getEast() {
        return this.east;
    }
    getWest() {
        return this.west;
    }
}
exports.Neighbors = Neighbors;
//# sourceMappingURL=Map.js.map