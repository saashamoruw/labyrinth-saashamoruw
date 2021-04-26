"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surroundings = void 0;
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
            case "north": {
                return this.north;
            }
            case "south": {
                return this.south;
            }
            case "east": {
                return this.east;
            }
            case "west": {
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
            possDir.push("north");
        }
        if (this.south !== undefined) {
            possDir.push("south");
        }
        if (this.east !== undefined) {
            possDir.push("east");
        }
        if (this.west !== undefined) {
            possDir.push("west");
        }
        console.log("Possible doorways are present in directions: ", possDir.toString());
    }
}
exports.Surroundings = Surroundings;
//# sourceMappingURL=Surroundings.js.map