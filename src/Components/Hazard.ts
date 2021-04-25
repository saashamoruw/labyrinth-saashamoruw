/**
 * Represents a hazard in an area
 */
export class Hazard {
    private overcame: boolean = false;
    /**
     * Initialized the hazard along with the key to overcome it
     */
    constructor(private description: String, private key: String) {
        if(key === undefined) {
            this.overcame = true
        }
    }

    /**
     * Uses the item to overcome the hazard
     */
    public overcomeHazard(item: String): boolean {
        if (item === this.key) {
            this.overcame = true
            return true
        }
        return false
    }

    /**
     * Checks if the hazard has been overcome
     */
    public haveOvercome() {
        return this.overcame;
    }

    /**
     * Shows the nature of the hazard
     */
    public print() {
        console.log("You are in danger! ", this.description)
    }
}