import { readlineSetup } from "./src/readline/readline";
import {
  createMap,
  createPlayer,
  createFood,
  intervalsSetup,
} from "./src/game/gameSetup";

createMap();
createPlayer();
createFood();
readlineSetup();
intervalsSetup();
