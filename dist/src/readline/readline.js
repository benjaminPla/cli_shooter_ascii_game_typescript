"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readlineSetup = exports.clearScreen = void 0;
const game_1 = __importDefault(require("../game/game"));
const readline_1 = __importDefault(require("readline"));
const endGame_1 = require("../utils/endGame");
const clearScreen = () => {
    readline_1.default.cursorTo(process.stdout, 0, 0);
    readline_1.default.clearScreenDown(process.stdout);
};
exports.clearScreen = clearScreen;
const readlineSetup = () => {
    readline_1.default.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true);
    }
    process.stdin.on("keypress", (input, key) => {
        if (key.name === "escape") {
            (0, endGame_1.endGame)();
        }
        else if (key.name === "w" && game_1.default.player.position.x > 1) {
            game_1.default.player.position.x--;
        }
        else if (key.name === "s" &&
            game_1.default.player.position.x < game_1.default.map.height - 2) {
            game_1.default.player.position.x++;
        }
        else if (key.name === "d" &&
            game_1.default.player.position.y < game_1.default.map.width - 2) {
            game_1.default.player.position.y++;
        }
        else if (key.name === "a" && game_1.default.player.position.y > 1) {
            game_1.default.player.position.y--;
        }
    });
};
exports.readlineSetup = readlineSetup;
