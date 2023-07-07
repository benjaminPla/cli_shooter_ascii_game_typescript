import game from "../game/game";

export const safeZoneMapY: number = Math.floor(
  (game.food.safeZonePercentage / 100) * game.map.height
);
