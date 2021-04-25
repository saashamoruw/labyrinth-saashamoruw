import {Command, CommandParser} from './Parser';
import {Map} from './Map'
class Labyrinth {
  private parser: CommandParser;
  private board: Map

  constructor() {
    this.board = new Map();
    this.parser = new CommandParser(
      (cmd: Command, arg: string) => this.handleInput(cmd, arg)
    );
  }

  private handleInput(cmd:Command, arg:string) :boolean {
    //the arguments are the command and "arguments" the user has entered
    console.log("Handling", cmd, "with argument '"+arg+"'");
  
    //an example of handling a particular input
    if(cmd === Command.GO){ 
      console.log("But I want to stay!");
    }
  
    return true; //return true to indicate that it should prompt for another input
  }
}

function main() {
  let labyrinth = new Labyrinth()
}