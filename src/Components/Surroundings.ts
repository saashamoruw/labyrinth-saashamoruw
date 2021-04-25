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
            case "north": {
                return this.north
            }
            case "south": {
                return this.south
            }
            case "east": {
                return this.east
            }  
            case "west": {
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
            possDir.push("north")
        }
        if(this.south !== undefined) {
            possDir.push("south")
        }
        if(this.east !== undefined) {
            possDir.push("east")
        }
        if(this.west !== undefined) {
            possDir.push("west")
        }
        console.log("Possible doorways are present in directions: ", possDir.toString())
    }
}