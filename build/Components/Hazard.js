"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hazard = void 0;
/**
 * Represents a hazard in an area
 */
class Hazard {
    /**
     * Initialized the hazard along with the key to overcome it
     */
    constructor(hazardDescr, hazardKey) {
        this.hazardDescr = hazardDescr;
        this.hazardKey = hazardKey;
        this.overcame = false;
        if (hazardKey === undefined) {
            this.overcame = true;
        }
        this.key = hazardKey;
        this.description = hazardDescr;
    }
    /**
     * Uses the item to overcome the hazard
     */
    overcomeHazard(item) {
        if (item === this.key) {
            this.overcame = true;
            return true;
        }
        return false;
    }
    /**
     * Checks if the hazard has been overcome
     */
    haveOvercome() {
        return this.overcame;
    }
    getHazardKey() {
        return this.hazardKey;
    }
    /**
     * Shows the nature of the hazard
     */
    print() {
        console.log("There is a hazard!", this.description);
    }
}
exports.Hazard = Hazard;
//# sourceMappingURL=Hazard.js.map