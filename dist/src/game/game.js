"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game = {
    bullets: {
        canSpawn: true,
        items: [],
        spawnSpeed: 100,
        spawnSpeedTrigger: 1,
        spawnSpeedDowngrade: 100,
    },
    food: {
        position: {
            x: 0,
            y: 0,
        },
    },
    frames: 30,
    map: {
        width: 64,
        height: 32,
        tiles: [],
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
