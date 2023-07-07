import game from "./src/game/game";
import { readlineSetup } from "./src/readline/readline";
import {
  createMap,
  createPlayer,
  createFood,
  createBullet,
} from "./src/game/gameSetup";
import draw from "./src/draw/draw";
import { eatFood } from "./src/mechanics/food";
import {
  bulletsMovement,
  bulletHit,
  bulletSpawnInterval,
  bulletsWave,
} from "./src/mechanics/bullets";

createMap();
createPlayer();
createFood();
readlineSetup();

setInterval(() => {
  draw();
  eatFood();
  bulletHit();
}, 1000 / game.frames);

bulletSpawnInterval();

setInterval(() => {
  bulletsMovement();
}, game.bullets.speed);

setInterval(() => {
  game.time++;
}, 1000);

setInterval(() => {
  bulletsWave();
  game.bullets.isWaveActive = true;
}, game.bullets.waveInterval);
