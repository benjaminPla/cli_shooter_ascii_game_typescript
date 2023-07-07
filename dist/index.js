"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("./src/game/game"));
const readline_1 = require("./src/readline/readline");
const gameSetup_1 = require("./src/game/gameSetup");
const draw_1 = __importDefault(require("./src/draw/draw"));
const food_1 = require("./src/mechanics/food");
const bullets_1 = require("./src/mechanics/bullets");
(0, gameSetup_1.createMap)();
(0, gameSetup_1.createPlayer)();
(0, gameSetup_1.createFood)();
(0, readline_1.readlineSetup)();
setInterval(() => {
    (0, draw_1.default)();
    (0, food_1.eatFood)();
    (0, bullets_1.bulletHit)();
}, 1000 / game_1.default.frames);
(0, bullets_1.bulletSpawnInterval)();
setInterval(() => {
    (0, bullets_1.bulletsMovement)();
}, game_1.default.bullets.speed);
setInterval(() => {
    game_1.default.time++;
}, 1000);
setInterval(() => {
    (0, bullets_1.bulletsWave)();
    game_1.default.bullets.isWaveActive = true;
}, 20000);
// }, game.bullets.waveInterval);
