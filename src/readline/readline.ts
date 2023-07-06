import game from "../game/game";
import readline from "readline";
import { showPlayedTime } from "../utils/endGame";

export const clearScreen = () => {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};

export const readlineSetup = () => {
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on("keypress", (input: any, key: any) => {
    if (key.name === "escape") {
      clearScreen();
      console.log(`Points: ${game.points}`);
      console.log(showPlayedTime());
      console.log("\nThanks for playing.");
      process.exit(0);
    } else if (key.name === "w" && game.player.position.x > 1) {
      game.player.position.x--;
    } else if (
      key.name === "s" &&
      game.player.position.x < game.map.height - 2
    ) {
      game.player.position.x++;
    } else if (
      key.name === "d" &&
      game.player.position.y < game.map.width - 2
    ) {
      game.player.position.y++;
    } else if (key.name === "a" && game.player.position.y > 1) {
      game.player.position.y--;
    }
  });
};