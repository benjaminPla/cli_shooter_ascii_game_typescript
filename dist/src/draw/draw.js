"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../game/game"));
const readline_1 = require("../readline/readline");
const endGame_1 = require("../utils/endGame");
const draw = () => {
    (0, readline_1.clearScreen)();
    const map = game_1.default.map.tiles.map((row, rowIndex) => {
        const tiles = row.map((tile, tileIndex) => {
            if (game_1.default.player.position.x === rowIndex &&
                game_1.default.player.position.y === tileIndex) {
                return game_1.default.sprites.player;
            }
            if (game_1.default.food.position.x === rowIndex &&
                game_1.default.food.position.y === tileIndex) {
                return game_1.default.sprites.food;
            }
            if (game_1.default.bullets.find((bullet) => bullet.x === rowIndex && bullet.y === tileIndex)) {
                return game_1.default.sprites.bullets;
            }
            if (tile.x === 0 || tile.x === game_1.default.map.height - 1) {
                return game_1.default.sprites.wall.horizontal;
            }
            if (tile.y === 0 || tile.y === game_1.default.map.width - 1) {
                return game_1.default.sprites.wall.vertical;
            }
            return " ";
        });
        return tiles.join("");
    });
    process.stdout.write("Press Esc to exit.\n");
    process.stdout.write(`Points: ${game_1.default.points}\n`);
    process.stdout.write(`${(0, endGame_1.showPlayedTime)()}\n`);
    process.stdout.write(map.join("\n"));
    // process.stdout.write(
    // JSON.stringify({
    // bullets: game.bullets,
    // })
    // );
};
exports.default = draw;
