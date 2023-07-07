import game from "../game/game";
import { clearScreen } from "../readline/readline";
import { ICoordinates } from "../interfaces/game";
import { showPlayedTime } from "../utils/endGame";
import { safeZoneMapY } from "../utils/safeZone";

const draw = (): void => {
  clearScreen();

  const map: string[] = game.map.tiles.map(
    (row: ICoordinates[], rowIndex: number) => {
      const tiles: string[] = row.map(
        (tile: ICoordinates, tileIndex: number) => {
          if (
            game.player.position.x === rowIndex &&
            game.player.position.y === tileIndex
          ) {
            return game.sprites.player;
          }
          if (
            game.food.position.x === rowIndex &&
            game.food.position.y === tileIndex
          ) {
            return game.sprites.food;
          }
          if (
            game.bullets.items.find(
              (bullet) => bullet.x === rowIndex && bullet.y === tileIndex
            )
          ) {
            return game.sprites.bullets;
          }
          if (tile.x === 0 || tile.x === game.map.height - 1) {
            return game.sprites.wall.horizontal;
          }
          if (tile.y === 0 || tile.y === game.map.width - 1) {
            return game.sprites.wall.vertical;
          }
          if (tile.x === safeZoneMapY && tile.y % 2 === 0) {
            return "-";
          }
          if (
            tile.x < safeZoneMapY &&
            game.bullets.isWaveActive &&
            game.time % 2 === 0
          ) {
            return ".";
          }
          return " ";
        }
      );
      return tiles.join("");
    }
  );

  process.stdout.write(
    `Press Esc to exit.\nPoints: ${game.points} | ${showPlayedTime()}\n\n`
  );
  process.stdout.write(map.join("\n"));
  // process.stdout.write(
  // JSON.stringify({
  // x: game.bullets.spawnSpeed,
  // })
  // );
};

export default draw;
