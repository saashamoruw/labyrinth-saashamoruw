import {Area} from './Area'
export class Inventory {
    private inventory: String[]
    constructor() {
        this.inventory = []
    }
      /*
    Shows all the items in the player inventory
    */
    public showInventory(): void {
        console.log(this.inventory.toString())
    }

    /*
    item is taken from the Area and saved to the inventory.
    */
    public getItem(currArea: Area, item: String) {
        if(this.inventory.indexOf(item) > -1) {
            console.log("You have already taken this item")
        } else if(currArea.hasItem(item)) {
            this.inventory.push(item)
            console.log(item, " has been added to your inventory")
        } else {
            console.log("This item is not in this room")
        }
        return true
    }

    /*
    Player can use an item currently in their inventory
    This also checks if the item used can overcome the hazard in the area
    If the hazard overcome is at the exit, the player wins the game
    */
    public useItem(currArea: Area, item: String): boolean {
         if(this.checkIfItemExists(item) && currArea.overcomeHazard(item)) {
            console.log("You have overcome this hazard!")
            this.removeItemFromInventory(item)
            return true
        } else {
            console.log("You cannot overcome this hazard with this item.")
            return false
        }
    }

    /**
     * Checks if item exists in the inventory
     */
    public checkIfItemExists(item: String) {
        if(this.inventory.indexOf(item) === -1) {
            console.log("This item does not exist in your inventory")
            return false
        }
        return true
    }

    /*
    Removes item from inventory after use
    */
    public removeItemFromInventory(item: String) {
        let index = this.inventory.indexOf(item)
        if (index > -1) {
            this.inventory.splice(index, 1);
         }
    }
}