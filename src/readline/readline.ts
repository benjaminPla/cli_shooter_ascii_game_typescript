import game from "../game/game";
import readline from "readline";
import { endGame } from "../utils/endGame";

import { bulletsMovementIntervalCallback } from "../intervals/intervals";
// import { bulletsSpeedChange } from "../mechanics/bullets";

export const clearScreen = () => {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};

export const readlineSetup = () => {
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on("keypress", (_: any, key: any) => {
    if (key.name === "k") {
      clearInterval(game.intervals.bullets.movement);
      // bulletsSpeedChange();
      game.intervals.bullets.movement = setInterval(
        bulletsMovementIntervalCallback,
        100
      );
    }
    if (key.name === game.controlls.exit) {
      endGame();
    } else if (
      key.name === game.controlls.player.up &&
      game.player.position.x > 1
    ) {
      game.player.position.x--;
    } else if (
      key.name === game.controlls.player.down &&
      game.player.position.x < game.map.height - 2
    ) {
      game.player.position.x++;
    } else if (
      key.name === game.controlls.player.right &&
      game.player.position.y < game.map.width - 2
    ) {
      game.player.position.y++;
    } else if (
      key.name === game.controlls.player.left &&
      game.player.position.y > 1
    ) {
      game.player.position.y--;
    }
  });
};
