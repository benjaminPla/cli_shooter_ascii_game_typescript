import game from "./game";
import { ICoordinates } from "../interfaces/game";
import { safeZoneMapY } from "../utils/safeZone";

export const createMap = (): void => {
  const tiles = [];
  for (let i = 0; i < game.map.height; i++) {
    const row = [];
    for (let j = 0; j < game.map.width; j++) {
      row.push({ x: i, y: j });
    }
    tiles.push(row);
  }
  game.map.tiles = tiles;
};

export const createPlayer = (): void => {
  game.player.position.x = Math.floor(game.map.height / 2);
  game.player.position.y = Math.floor(game.map.width / 2);
};

export const createFood = (): void => {
  const maxHeight = game.map.height - 2;

  game.food.position.x = Math.floor(
    Math.random() * (maxHeight - safeZoneMapY) + safeZoneMapY
  );
  game.food.position.y = Math.floor(Math.random() * (game.map.width - 2) + 1);
};

export const createBullet = (): void => {
  const newBullet: ICoordinates = {
    x: 0,
    y: Math.floor(Math.random() * (game.map.width - 1 - 1) + 1),
  };
  // @ts-ignore
  game.bullets.items.push(newBullet);
};
