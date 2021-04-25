"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./Parser");
const Map_1 = require("./Map");
class Labyrinth {
    constructor() {
        this.board = new Map_1.Map();
        this.parser = new Parser_1.CommandParser((cmd, arg) => this.handleInput(cmd, arg));
    }
    handleInput(cmd, arg) {
        //the arguments are the command and "arguments" the user has entered
        console.log("Handling", cmd, "with argument '" + arg + "'");
        //an example of handling a particular input
        if (cmd === Parser_1.Command.GO) {
            console.log("But I want to stay!");
        }
        return true; //return true to indicate that it should prompt for another input
    }
}
function main() {
    let labyrinth = new Labyrinth();
}
//# sourceMappingURL=app.js.map