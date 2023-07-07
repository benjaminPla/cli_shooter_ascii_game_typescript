import game from "../game/game";
import { createBullet } from "../game/gameSetup";
import { endGame } from "../utils/endGame";

export const bulletsMovement = (): void => {
  game.bullets.items.forEach((bullet, index) => {
    if (bullet.x > game.map.height) {
      game.bullets.items.splice(index, 1);
    }
    bullet.x++;
  });
};

export const bulletHit = (): void => {
  game.bullets.items.forEach((bullet, index) => {
    if (
      game.player.position.x === bullet.x &&
      game.player.position.y === bullet.y
    ) {
      endGame();
    }
  });
};

export let bulletSpawnIntervalId: NodeJS.Timeout;

export const bulletSpawnInterval = (): void => {
  bulletSpawnIntervalId = setInterval(() => {
    createBullet();
  }, game.bullets.spawnSpeed);
};
