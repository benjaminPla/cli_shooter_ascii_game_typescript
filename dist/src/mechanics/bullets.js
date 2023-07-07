"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulletsWave = exports.bulletSpawnInterval = exports.bulletSpawnIntervalId = exports.bulletHit = exports.bulletsMovement = void 0;
const game_1 = __importDefault(require("../game/game"));
const gameSetup_1 = require("../game/gameSetup");
const endGame_1 = require("../utils/endGame");
const bulletsMovement = () => {
    game_1.default.bullets.items.forEach((bullet, index) => {
        if (bullet.x > game_1.default.map.height) {
            game_1.default.bullets.items.splice(index, 1);
        }
        bullet.x++;
    });
};
exports.bulletsMovement = bulletsMovement;
const bulletHit = () => {
    game_1.default.bullets.items.forEach((bullet, index) => {
        if (game_1.default.player.position.x === bullet.x &&
            game_1.default.player.position.y === bullet.y) {
            (0, endGame_1.endGame)();
        }
    });
};
exports.bulletHit = bulletHit;
const bulletSpawnInterval = () => {
    exports.bulletSpawnIntervalId = setInterval(() => {
        (0, gameSetup_1.createBullet)();
    }, game_1.default.bullets.spawnSpeed);
};
exports.bulletSpawnInterval = bulletSpawnInterval;
const bulletsWave = () => {
    for (let i = 0; i < game_1.default.map.width; i++) {
        if (i % 2 === 0) {
            const distance = Math.abs(i - game_1.default.map.width + 1);
            const bulletX = -distance;
            if (i <= Math.floor(game_1.default.map.width / 2)) {
                const newBullet = {
                    x: bulletX,
                    y: i,
                };
                // @ts-ignore
                game_1.default.bullets.items.push(newBullet);
            }
            else {
                const newBullet = {
                    x: -i + 1,
                    y: i,
                };
                // @ts-ignore
                game_1.default.bullets.items.push(newBullet);
            }
        }
    }
    setTimeout(() => {
        game_1.default.bullets.isWaveActive = false;
    }, game_1.default.bullets.waveWarningTime);
};
exports.bulletsWave = bulletsWave;
