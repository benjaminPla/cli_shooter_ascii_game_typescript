import game from "../game/game";
import { createFood } from "../game/gameSetup";
import {
  setupBulletSpawnInterval,
  bulletSpawnIntervalId,
} from "../mechanics/bullets";

export const eatFood = (): void => {
  if (
    game.player.position.x === game.food.position.x &&
    game.player.position.y === game.food.position.y
  ) {
    game.points++;
    createFood();
    game.bullets.canSpawn = true;
  }

  if (game.points % 3 === 0 && game.bullets.canSpawn && game.points !== 0) {
    clearInterval(bulletSpawnIntervalId);
    game.bullets.spawnSpeed -= 500;
    game.bullets.canSpawn = false;
    setupBulletSpawnInterval()
  }
};
