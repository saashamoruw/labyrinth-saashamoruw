"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surroundings = void 0;
const constants_1 = require("./constants");
/**
 * Surroundings handles the connections between each area
 */
class Surroundings {
    constructor(north, south, east, west) {
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }
    /**
     * Gets the key of area in the provided direction
     */
    getAreaInDirection(direction) {
        switch (direction.toLowerCase()) {
            case constants_1.NORTH: {
                return this.north;
            }
            case constants_1.SOUTH: {
                return this.south;
            }
            case constants_1.EAST: {
                return this.east;
            }
            case constants_1.WEST: {
                return this.west;
            }
            default: {
                return undefined;
            }
        }
    }
    /**
     * Gets all valid directions the player can move in from the current area
     */
    doorways() {
        let possDir = [];
        if (this.north !== undefined) {
            possDir.push(constants_1.NORTH);
        }
        if (this.south !== undefined) {
            possDir.push(constants_1.SOUTH);
        }
        if (this.east !== undefined) {
            possDir.push(constants_1.EAST);
        }
        if (this.west !== undefined) {
            possDir.push(constants_1.WEST);
        }
        console.log("There are doorways present in the following directions: ", possDir.toString());
    }
}
exports.Surroundings = Surroundings;
//# sourceMappingURL=Surroundings.js.map