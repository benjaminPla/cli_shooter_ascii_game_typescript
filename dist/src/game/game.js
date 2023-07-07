"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game = {
    bullets: {
        canSpawn: true,
        items: [],
        spawnSpeed: 1000,
        spawnSpeedTrigger: 10,
        spawnSpeedDowngrade: 100,
        speed: 500,
    },
    food: {
        position: {
            x: 0,
            y: 0,
        },
        safeZonePercentage: 30,
    },
    frames: 30,
    map: {
        height: 32,
        tiles: [],
        width: 64,
    },
    player: {
        position: {
            x: 0,
            y: 0,
        },
    },
    points: 0,
    sprites: {
        bullets: "V",
        food: "X",
        player: "O",
        wall: {
            vertical: "|",
            horizontal: "T",
        },
    },
    time: 0,
};
exports.default = game;
