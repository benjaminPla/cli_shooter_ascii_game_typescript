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
  bulletsMechanics,
  setupBulletSpawnInterval,
} from "./src/mechanics/bullets";

createMap();
createPlayer();
createFood();
readlineSetup();

setInterval(() => {
  draw();
  eatFood();
  bulletsMechanics();
}, 1000 / game.frames);

setupBulletSpawnInterval();

setInterval(() => {
  game.time++;
}, 1000);
