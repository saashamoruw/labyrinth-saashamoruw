export class Surroundings {
    constructor(private north?: String, private south?: String, private east?: String, private west?: String) {}

    public moveInDirection(direction:String) :String|undefined {
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
}