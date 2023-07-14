import game from "./src/game/game";
import { readlineSetup } from "./src/readline/readline";
import {
  createMap,
  createPlayer,
  createFood,
  createBullet,
  intervalsSetup,
} from "./src/game/gameSetup";

createMap();
createPlayer();
createFood();
readlineSetup();
intervalsSetup();
