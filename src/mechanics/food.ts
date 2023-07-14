import game from "../game/game";
import { createFood } from "../game/gameSetup";
import { bulletsSpawnIntervalCallback } from "../intervals/intervals";

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
    game.bullets.spawnSpeed > game.bullets.minSpawnSpeed
  ) {
    clearInterval(game.intervals.bullets.spawn);
    game.bullets.spawnSpeed -= game.bullets.spawnSpeedDowngrade;

    if (game.bullets.spawnSpeed < game.bullets.minSpawnSpeed) {
      game.bullets.spawnSpeed = game.bullets.minSpawnSpeed;
    }

    game.bullets.canSpawn = false;
    game.intervals.bullets.spawn = setInterval(
      bulletsSpawnIntervalCallback,
      game.bullets.spawnSpeed
    );
  }
};
