import game from "../game/game";
import { createFood } from "../game/gameSetup";
import {
  bulletSpawnInterval,
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

  if (
    game.points % game.bullets.spawnSpeedTrigger === 0 &&
    game.bullets.canSpawn &&
    game.points !== 0 &&
    game.bullets.spawnSpeed >= 100
  ) {
    clearInterval(bulletSpawnIntervalId);
    game.bullets.spawnSpeed -= game.bullets.spawnSpeedDowngrade;
    game.bullets.canSpawn = false;
    bulletSpawnInterval();
  }
};
