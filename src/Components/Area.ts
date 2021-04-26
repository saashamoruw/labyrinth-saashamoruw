import {Hazard} from './Hazard'
import {Surroundings} from './Surroundings'
import {EXIT} from './Constants'

/*
Represents an area in the labyrinth
*/
export class Area {
    constructor(private key: String, private name: String, private description: String, private item: String, private hazard: Hazard, 
        private surroundings: Surroundings) { }
    
    /*
    Shows all the information about the area
    */
    public print(): void {
        console.log("\nThis is", this.name.toUpperCase());
        this.printDescription()
        if(this.item === undefined) {
            console.log("There are no items in this room")
        } else {
            console.log("In this room there may or may not be " + this.item);
        }
        this.showPossibleDirections()
    }

    /*
    Shows just the description of the area
    */
    public printDescription(): void {
        console.log(this.description);
    }

    public getKey(): String {
        return this.key
    }

    /**
     * Checks if the area is the exit to the labyrinth
     */
    public isExit(): boolean {
        if(this.key === EXIT) {
            return true
        }
        return false
    }

    /**
     * Checks if the item is present in the area
     */
    public hasItem(item: String): boolean {
        if(item === this.item) {
            return true
        } else {
            return false
        }
    }

    /**
     * Shows the hazard currently in the area
     */
    public printHazardDescription(): void {
        this.hazard.print()
    }

    /**
     * Checks if the hazard in the area has been overcome or not
     */
     public ifHazardPassed(): boolean {
        return this.hazard.haveOvercome();
    }

    /**
     * Uses the item to overcome the hazard, if it is the valid item for the area
     */
    public overcomeHazard(item: String): boolean {
        return this.hazard.overcomeHazard(item)
    }

    public getHazardKey(): String {
        return this.hazard.getHazardKey()
    }

    public showPossibleDirections(): void {
        this.surroundings.doorways()
    }

    /**
     * Gets the new area to move to in the direction provided
     */
    public moveTo(direction: String): String {
        let newAreaKey = this.surroundings.getAreaInDirection(direction)
        if(newAreaKey === undefined) {
            return ""
        } else {
           return newAreaKey
        }
    }
}