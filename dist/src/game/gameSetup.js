"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intervalsSetup = exports.createBullet = exports.createFood = exports.createPlayer = exports.createMap = void 0;
const game_1 = __importDefault(require("./game"));
const safeZone_1 = require("../utils/safeZone");
const intervals_1 = require("../intervals/intervals");
const createMap = () => {
    const tiles = [];
    for (let i = 0; i < game_1.default.map.height; i++) {
        const row = [];
        for (let j = 0; j < game_1.default.map.width; j++) {
            row.push({ x: i, y: j });
        }
        tiles.push(row);
    }
    game_1.default.map.tiles = tiles;
};
exports.createMap = createMap;
const createPlayer = () => {
    game_1.default.player.position.x = Math.floor(game_1.default.map.height / 2);
    game_1.default.player.position.y = Math.floor(game_1.default.map.width / 2);
};
exports.createPlayer = createPlayer;
const createFood = () => {
    const maxHeight = game_1.default.map.height - 2;
    game_1.default.food.position.x = Math.floor(Math.random() * (maxHeight - safeZone_1.safeZoneMapY) + safeZone_1.safeZoneMapY);
    game_1.default.food.position.y = Math.floor(Math.random() * (game_1.default.map.width - 2) + 1);
};
exports.createFood = createFood;
const createBullet = () => {
    const newBullet = {
        x: 0,
        y: Math.floor(Math.random() * (game_1.default.map.width - 1 - 1) + 1),
    };
    // @ts-ignore
    game_1.default.bullets.items.push(newBullet);
};
exports.createBullet = createBullet;
const intervalsSetup = () => {
    game_1.default.intervals.main = setInterval(intervals_1.mainIntervalCallback, 1000 / game_1.default.frames);
    game_1.default.intervals.time = setInterval(() => game_1.default.time++, 1000);
    game_1.default.intervals.bullets.spawn = setInterval(intervals_1.bulletsSpawnIntervalCallback, game_1.default.bullets.spawnSpeed);
    game_1.default.intervals.bullets.movement = setInterval(intervals_1.bulletsMovementIntervalCallback, game_1.default.bullets.movementSpeed);
    game_1.default.intervals.bullets.waves = setInterval(intervals_1.bulletsWavesIntervalCallback, game_1.default.bullets.waveInterval);
};
exports.intervalsSetup = intervalsSetup;
