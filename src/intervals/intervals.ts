import game from "../game/game";
import draw from "../draw/draw";
import { eatFood } from "../mechanics/food";
import { bulletHit } from "../mechanics/bullets";
import { createBullet } from "../game/gameSetup";
import { bulletsWave } from "../mechanics/bullets";

export const mainIntervalCallback = (): void => {
  draw();
  eatFood();
  bulletHit();
};

export const bulletsMovementIntervalCallback = (): void => {
  game.bullets.items.forEach((bullet, index) => {
    if (bullet.x > game.map.height) {
      game.bullets.items.splice(index, 1);
      return;
    }
    bullet.x++;
  });
};

export const bulletsSpawnIntervalCallback = (): void => {
  createBullet();
};

export const bulletsWavesIntervalCallback = (): void => {
  bulletsWave();
  game.bullets.isWaveActive = true;
};
