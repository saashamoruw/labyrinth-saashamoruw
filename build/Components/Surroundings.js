"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surroundings = void 0;
class Surroundings {
    constructor(north, south, east, west) {
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }
    moveInDirection(direction) {
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
}
exports.Surroundings = Surroundings;
//# sourceMappingURL=Surroundings.js.map