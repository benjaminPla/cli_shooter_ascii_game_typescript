import game from "../game/game";
import { createFood } from "../game/gameSetup";

const foodMechanics = (): void => {
  if (
    game.player.position.x === game.food.position.x &&
    game.player.position.y === game.food.position.y
  ) {
    game.points++;
    createFood();
  }
};

export default foodMechanics;
