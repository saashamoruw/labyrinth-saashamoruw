"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.inventory = [];
    }
    /*
  Shows all the items in the player inventory
  */
    showInventory() {
        console.log(this.inventory.toString());
    }
    /*
    item is taken from the Area and saved to the inventory.
    */
    getItem(currArea, item) {
        if (this.inventory.indexOf(item) > -1) {
            console.log("You have already taken this item");
        }
        else if (currArea.hasItem(item)) {
            this.inventory.push(item);
            console.log(item, " has been added to your inventory");
        }
        else {
            console.log("This item is not in this room");
        }
        return true;
    }
    /*
    Player can use an item currently in their inventory
    This also checks if the item used can overcome the hazard in the area
    If the hazard overcome is at the exit, the player wins the game
    */
    useItem(currArea, item) {
        let index = this.inventory.indexOf(item);
        if (index === -1) {
            console.log("This item does not exist in your inventory");
        }
        else if (currArea.overcomeHazard(item)) {
            console.log("You have overcome this hazard!");
            this.removeItemFromInventory(index);
            // If this area was the exit then player wins the game
            if (currArea.isExit()) {
                return false;
            }
        }
        else {
            console.log("You cannot overcome this hazard with this item.");
        }
        return true;
    }
    /*
Removes item from inventory after use
*/
    removeItemFromInventory(index) {
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }
}
exports.Inventory = Inventory;
//# sourceMappingURL=Inventory.js.map