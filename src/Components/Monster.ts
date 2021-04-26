/**
 * Represents a monster that randomly wanders the game map
 */
export class Monster implements IHazard {
    private overcome: boolean = false
    private description: String = 
    "A big scary monster who likes to eat humans for fun has entered the room. The only thing that can slay it is an offering of cake :)"
    private key: String = "cake"
    private nextArea: number
    constructor(private areas: String[], private currArea: String) {
        this.nextArea = this.areas.length - 1
    }
    
    /**
     * Moves the monster through the labyrinth
     */
    public move() {
        // Moves the monster to a random area in the map
        // let newArea = this.areas[Math.floor(Math.random() * this.areas.length)];
        // Moves the monster one room at a time
        this.changeNextArea()
        let newArea = this.areas[this.nextArea]
        this.currArea = newArea
        // console.log("Monster just moved to ", newArea)
    }
    
    /**
     * Returns the name of the current area the monster is in
     */
    public currentLocation(): String {
        return this.currArea
    }

    /**
     * Shows a victory message when the monster has been slayed
     */
    public died(): void {
        console.log('Yay! You are a strong, monster slayer. Go you!')
    }
     /**
     * Uses the item to overcome the hazard
     */
    public overcomeHazard(item: String): boolean {
        if(item === this.key) {
            this.overcome = true
            return true
        }
        return false
    }

    /**
     * Checks if the hazard has been overcome
     */
    public haveOvercome(): boolean {
        return this.overcome
    }

    /**
     * Shows the nature of the hazard
     */
    public print(): void {
        console.log(this.description)
    }

    private changeNextArea(): void {
        if(this.nextArea === 0) {
            this.nextArea = this.areas.length - 1
        } else {
            this.nextArea = this.nextArea - 1
        }
    }
}