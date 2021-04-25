import {Command, CommandParser} from './Parser';
import {Labyrinth} from './Labyrinth'
class LabyrinthGame {
  private parser: CommandParser;
  private board: Labyrinth

  constructor() {
    this.board = new Labyrinth();
    this.parser = new CommandParser(
      (cmd: Command, arg: string) => this.handleInput(cmd, arg)
    );
  }

  private handleInput(cmd:Command, arg:string) :boolean {
    let argument = arg.toLowerCase().trim();
    let cont = true
    if(cmd === Command.GO){ 
      cont = this.handleGo(argument)
    }
    if (cmd === Command.TAKE) {
      cont = this.handleTake(argument);
    }
    if (cmd === Command.USE) {
      cont = this.handleUse(argument);
    }
    if (cmd === Command.INVENTORY) {
      this.handleInventory();
    }
    if (cmd === Command.LOOK) {
      this.handleLook();
    }

    if (cmd === "QUIT") {
      cont = false;
    }
    if (cont) {
      console.log("What is your next move? ");
    } else {
      console.log("Congratulations, you have exited the cave!")
    }
    return cont; //return true to indicate that it should prompt for another input
  }

  public start() {
    console.log("Welcome!")
    this.board.startLabyrinth()
    this.parser.start()
  }

  private handleGo(argument: String) : boolean {
    return this.board.makeMoveAndCheckSafety(argument)
  }

  private handleTake(argument: String): boolean {
    return this.board.getItem(argument)
  }

  private handleUse(argument: String): boolean {
    return this.board.useItem(argument)
  }

  private handleInventory(): void {
    this.board.showInventory()
  }

  private handleLook(): void {
    this.board.showAreaDescription()
  }
}

function main() {
  try {
    let labyrinth = new LabyrinthGame()
    labyrinth.start()
  } catch(e) {
    console.log(e.message)
  }
}

main();