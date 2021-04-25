/**
 * Represents a hazard in an area
 */
export class Hazard implements IHazard {
    private overcame: boolean = false;
    private key: String
    private description: String
    /**
     * Initialized the hazard along with the key to overcome it
     */
    constructor(private hazardDescr: String, private hazardKey: String) {
        if(hazardKey === undefined) {
            this.overcame = true
        } 
        this.key = hazardKey;
        this.description = hazardDescr;
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
    public haveOvercome(): boolean {
        return this.overcame;
    }

    /**
     * Shows the nature of the hazard
     */
    public print() {
        console.log("You are in danger! ", this.description)
    }
}