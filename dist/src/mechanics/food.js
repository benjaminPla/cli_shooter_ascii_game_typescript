"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eatFood = void 0;
const game_1 = __importDefault(require("../game/game"));
const gameSetup_1 = require("../game/gameSetup");
const intervals_1 = require("../intervals/intervals");
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
        clearInterval(game_1.default.intervals.bullets.spawn);
        game_1.default.bullets.spawnSpeed -= game_1.default.bullets.spawnSpeedDowngrade;
        if (game_1.default.bullets.spawnSpeed < game_1.default.bullets.minSpawnSpeed) {
            game_1.default.bullets.spawnSpeed = game_1.default.bullets.minSpawnSpeed;
        }
        game_1.default.bullets.canSpawn = false;
        game_1.default.intervals.bullets.spawn = setInterval(intervals_1.bulletsSpawnIntervalCallback, game_1.default.bullets.spawnSpeed);
    }
};
exports.eatFood = eatFood;
