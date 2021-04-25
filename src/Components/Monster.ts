export class Monster implements IHazard {

    public moveMonster() {
        
    }
    
     /**
     * Uses the item to overcome the hazard
     */
    public overcomeHazard(item: String): boolean {
        return true
    }

    /**
     * Checks if the hazard has been overcome
     */
    public haveOvercome(): boolean {
        return true
    }

    /**
     * Shows the nature of the hazard
     */
    public print(): void {
    }

}