import {Area} from './Components/Area'
import {Hazard} from './Components/Hazard'
import {Surroundings} from './Components/Surroundings'
import {Inventory} from './Components/Inventory'
/*
Labyrinth keeps track of all the elements of the game, and updates them as game goes on. 
*/

export class Labyrinth {
    private gameMap: Map<String, Area>
    private inventory: Inventory
    private start: Area
    private prevArea: Area
    private currArea: Area

    /*
    Constructs all the areas and initializes all labyrinth elements
    */
    constructor() {
        let blueprint = require('../map.json');
        const startingArea = "entry"
        let map = new Map()
        for (const key in blueprint) {
            const value = blueprint[key]
            let hazard = new Hazard(value.hazard, value.hazardkey)
            let surrounding = new Surroundings(value.neighbor.north, value.neighbor.south, 
            value.neighbor.east, value.neighbor.west)
            let area = new Area(value.name, value.description, value.item, hazard, surrounding)
            map.set(key, area)
        }
        this.gameMap = map
        this.inventory = new Inventory()
        this.prevArea = map.get(startingArea)
        this.currArea = map.get(startingArea)
        this.start = map.get(startingArea)

    }

    /*
    prints out the description of Area where player starts
    */
    public startLabyrinth(): void {
        this.start.print()
    }

    /*
    Enables the player to move through the Labyrinth
    Player can go back to where they last came from no matter the Hazards
    To be able to move in any other direction, the player has to have overcome the hazard
    and the direction should not lead to a dead end
    */
    public makeMoveAndCheckSafety(direction:String): boolean {
        if(direction === "back") {
            this.setCurrAndPrevAreas(this.prevArea, this.currArea)
            this.currArea.print()
        }
        else if (this.safeFromHazardAndNoDeadEnd(direction)) {
            let newArea = this.gameMap.get(this.currArea.moveTo(direction))
            if(newArea !== undefined) {
                this.setCurrAndPrevAreas(newArea, this.currArea)
                this.currArea.print()
            } else {
                console.log("Invalid direction")
            }
        }
        return true;
    }

    /*
    Displays the description of the area the player is currently in
    */
    public showAreaDescription(): void{
        this.currArea.printDescription()
    }

    /**
     * Shows the items currently in the inventory
     */
    public showInventory() {
        this.inventory.showInventory()
    }

    /**
     * Gets the item from the area and adds it to the inventory
     */
    public getItem(item: String) {
        return this.inventory.getItem(this.currArea, item)
    }

    /**
     * Uses the item from the inventory to use on a hazard in the area
     */
    public useItem(item: String) {
        return this.inventory.useItem(this.currArea, item)
    }

    /*
    Checks if the player is currently in danger and has not overcome the hazard in the area
    If the player is not currently in danger, the direction is checked for validity of a dead end
    */
    private safeFromHazardAndNoDeadEnd(direction:String) {
        if(!this.currArea.ifHazardPassed()) {
            this.currArea.printHazardDescription()
            return false
        } else if (this.currArea.moveTo(direction) === "") {
            console.log('There is a dead end in this direction, try another one')
            return false
        } else {
            return true
        }
    }

    /*
    Current and Previous areas are set as per parameters
    */
    private setCurrAndPrevAreas(setToCurrArea: Area, setToPrevArea: Area): void {
        this.currArea = setToCurrArea
        this.prevArea = setToPrevArea
    }

}