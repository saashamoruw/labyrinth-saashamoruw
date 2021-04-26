import {NORTH, SOUTH, EAST, WEST} from './constants'

/**
 * Surroundings handles the connections between each area 
 */
export class Surroundings {
    constructor(private north?: String, private south?: String, private east?: String, private west?: String) {}

    /**
     * Gets the key of area in the provided direction
     */
    public getAreaInDirection(direction:String) :String|undefined {
        switch(direction.toLowerCase()) {
            case NORTH: {
                return this.north
            }
            case SOUTH: {
                return this.south
            }
            case EAST: {
                return this.east
            }  
            case WEST: {
                return this.west
            }
            default: {
                return undefined
            }
        }
    }

    /**
     * Gets all valid directions the player can move in from the current area
     */
    public doorways(): void {
        let possDir = []
        if(this.north !== undefined) {
            possDir.push(NORTH)
        }
        if(this.south !== undefined) {
            possDir.push(SOUTH)
        }
        if(this.east !== undefined) {
            possDir.push(EAST)
        }
        if(this.west !== undefined) {
            possDir.push(WEST)
        }
        console.log("There are doorways present in the following directions: ", possDir.toString())
    }
}