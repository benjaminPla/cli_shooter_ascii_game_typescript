import game from "../game/game";
import { createBullet } from "../game/gameSetup";
import { endGame } from "../utils/endGame";

const bulletsMechanics = (): void => {
  game.bullets.forEach((bullet, index) => {
    if (
      game.player.position.x === bullet.x &&
      game.player.position.y === bullet.y
    ) {
      endGame();
    }
    if (bullet.x > game.map.height) {
      game.bullets.splice(index, 1);
    }
    bullet.x++;
  });
};

export default bulletsMechanics;
