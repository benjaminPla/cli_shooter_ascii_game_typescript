import game from "./src/game/game";
import { readlineSetup } from "./src/readline/readline";
import {
  createMap,
  createPlayer,
  createFood,
  createBullet,
} from "./src/game/gameSetup";
import draw from "./src/draw/draw";
import foodMechanics from "./src/mechanics/food";
import bulletsMechanics from "./src/mechanics/bullets";

createMap();
createPlayer();
createFood();
readlineSetup();

setInterval(() => {
  draw();
  foodMechanics();
  bulletsMechanics();
}, 1000 / game.frames);

setInterval(() => {
  createBullet();
  game.time++;
}, 1000);
