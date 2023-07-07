"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eatFood = void 0;
const game_1 = __importDefault(require("../game/game"));
const gameSetup_1 = require("../game/gameSetup");
const bullets_1 = require("../mechanics/bullets");
const eatFood = () => {
    if (game_1.default.player.position.x === game_1.default.food.position.x &&
        game_1.default.player.position.y === game_1.default.food.position.y) {
        game_1.default.points++;
        (0, gameSetup_1.createFood)();
        game_1.default.bullets.canSpawn = true;
    }
    if (game_1.default.points % game_1.default.bullets.spawnSpeedTrigger === 0 &&
        game_1.default.bullets.canSpawn &&
        game_1.default.points !== 0 &&
        game_1.default.bullets.spawnSpeed > game_1.default.bullets.minSpawnSpeed) {
        clearInterval(bullets_1.bulletSpawnIntervalId);
        game_1.default.bullets.spawnSpeed -= game_1.default.bullets.spawnSpeedDowngrade;
        if (game_1.default.bullets.spawnSpeed < game_1.default.bullets.minSpawnSpeed) {
            game_1.default.bullets.spawnSpeed = game_1.default.bullets.minSpawnSpeed;
        }
        game_1.default.bullets.canSpawn = false;
        (0, bullets_1.bulletSpawnInterval)();
    }
};
exports.eatFood = eatFood;
