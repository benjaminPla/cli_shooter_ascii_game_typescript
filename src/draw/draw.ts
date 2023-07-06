import game from "../game/game";
import { clearScreen } from "../readline/readline";
import { ICoordinates } from "../interfaces/game";
import { showPlayedTime } from "../utils/endGame";

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
          return " ";
        }
      );
      return tiles.join("");
    }
  );

  process.stdout.write("Press Esc to exit.\n");
  process.stdout.write(`Points: ${game.points}\n`);
  process.stdout.write(`${showPlayedTime()}\n`);
  process.stdout.write(map.join("\n"));
  process.stdout.write(
    JSON.stringify({
      bulletsSpawnSpeed: game.bullets.spawnSpeed,
      bulletsCanSpawn: game.bullets.canSpawn,
    })
  );
};

export default draw;
