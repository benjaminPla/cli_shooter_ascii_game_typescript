import game from "../game/game";
import { ICoordinates } from "../interfaces/game";
import { endGame } from "../utils/endGame";

export const bulletHit = (): void => {
  game.bullets.items.forEach((bullet) => {
    if (
      game.player.position.x === bullet.x &&
      game.player.position.y === bullet.y
    ) {
      endGame();
    }
  });
};

export const bulletsWave = (): void => {
  for (let i = 0; i < game.map.width; i++) {
    if (i % 2 === 0) {
      const distance = Math.abs(i - game.map.width + 1);
      const bulletX = -distance;
      if (i <= Math.floor(game.map.width / 2)) {
        const newBullet: ICoordinates = {
          x: bulletX,
          y: i,
        };
        // @ts-ignore
        game.bullets.items.push(newBullet);
      } else {
        const newBullet: ICoordinates = {
          x: -i + 1,
          y: i,
        };
        // @ts-ignore
        game.bullets.items.push(newBullet);
      }
    }
  }
  setTimeout(() => {
    game.bullets.isWaveActive = false;
  }, game.bullets.waveWarningTime);
};

// export const bulletsSpeedChange = (): void => {
// game.bullets.movementSpeed = Math.floor(game.bullets.movementSpeed * 0.9);
// };
