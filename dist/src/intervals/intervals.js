"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulletsWavesIntervalCallback = exports.bulletsSpawnIntervalCallback = exports.bulletsMovementIntervalCallback = exports.mainIntervalCallback = void 0;
const game_1 = __importDefault(require("../game/game"));
const draw_1 = __importDefault(require("../draw/draw"));
const food_1 = require("../mechanics/food");
const bullets_1 = require("../mechanics/bullets");
const gameSetup_1 = require("../game/gameSetup");
const bullets_2 = require("../mechanics/bullets");
const mainIntervalCallback = () => {
    (0, draw_1.default)();
    (0, food_1.eatFood)();
    (0, bullets_1.bulletHit)();
};
exports.mainIntervalCallback = mainIntervalCallback;
const bulletsMovementIntervalCallback = () => {
    game_1.default.bullets.items.forEach((bullet, index) => {
        if (bullet.x > game_1.default.map.height) {
            game_1.default.bullets.items.splice(index, 1);
            return;
        }
        bullet.x++;
    });
};
exports.bulletsMovementIntervalCallback = bulletsMovementIntervalCallback;
const bulletsSpawnIntervalCallback = () => {
    (0, gameSetup_1.createBullet)();
};
exports.bulletsSpawnIntervalCallback = bulletsSpawnIntervalCallback;
const bulletsWavesIntervalCallback = () => {
    (0, bullets_2.bulletsWave)();
    game_1.default.bullets.isWaveActive = true;
};
exports.bulletsWavesIntervalCallback = bulletsWavesIntervalCallback;
