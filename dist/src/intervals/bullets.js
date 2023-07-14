"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulletsWavesIntervalCallback = exports.bulletsSpawnIntervalCallback = exports.bulletsMovementIntervalCallback = void 0;
const game_1 = __importDefault(require("../game/game"));
const gameSetup_1 = require("../game/gameSetup");
const bullets_1 = require("../mechanics/bullets");
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
    (0, bullets_1.bulletsWave)();
    game_1.default.bullets.isWaveActive = true;
};
exports.bulletsWavesIntervalCallback = bulletsWavesIntervalCallback;
