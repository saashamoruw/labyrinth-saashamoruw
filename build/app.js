"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./Parser");
const Labyrinth_1 = require("./Labyrinth");
class LabyrinthGame {
    constructor() {
        this.board = new Labyrinth_1.Labyrinth();
        this.parser = new Parser_1.CommandParser((cmd, arg) => this.handleInput(cmd, arg));
    }
    handleInput(cmd, arg) {
        let argument = arg.toLowerCase().trim();
        let cont = true;
        if (cmd === Parser_1.Command.GO) {
            cont = this.handleGo(argument);
        }
        if (cmd === Parser_1.Command.TAKE) {
            cont = this.handleTake(argument);
        }
        if (cmd === Parser_1.Command.USE) {
            cont = this.handleUse(argument);
        }
        if (cmd === Parser_1.Command.INVENTORY) {
            this.handleInventory();
        }
        if (cmd === Parser_1.Command.LOOK) {
            this.handleLook();
        }
        if (cmd === "QUIT") {
            cont = false;
        }
        if (cont) {
            console.log("What is your next move? ");
        }
        else {
            console.log("Congratulations, you have exited the cave!");
        }
        return cont; //return true to indicate that it should prompt for another input
    }
    start() {
        console.log("Welcome!");
        this.board.startLabyrinth();
        this.parser.start();
    }
    handleGo(argument) {
        return this.board.makeMoveAndCheckSafety(argument);
    }
    handleTake(argument) {
        return this.board.getItem(argument);
    }
    handleUse(argument) {
        return this.board.useItem(argument);
    }
    handleInventory() {
        this.board.showInventory();
    }
    handleLook() {
        this.board.showAreaDescription();
    }
}
function main() {
    let labyrinth = new LabyrinthGame();
    labyrinth.start();
}
main();
//# sourceMappingURL=app.js.map