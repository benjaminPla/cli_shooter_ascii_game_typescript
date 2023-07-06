"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../game/game"));
const endGame_1 = require("../utils/endGame");
const bulletsMechanics = () => {
    game_1.default.bullets.forEach((bullet, index) => {
        if (game_1.default.player.position.x === bullet.x &&
            game_1.default.player.position.y === bullet.y) {
            (0, endGame_1.endGame)();
        }
        if (bullet.x > game_1.default.map.height) {
            game_1.default.bullets.splice(index, 1);
        }
        bullet.x++;
    });
};
exports.default = bulletsMechanics;
