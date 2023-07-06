"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../game/game"));
const gameSetup_1 = require("../game/gameSetup");
const foodMechanics = () => {
    if (game_1.default.player.position.x === game_1.default.food.position.x &&
        game_1.default.player.position.y === game_1.default.food.position.y) {
        game_1.default.points++;
        (0, gameSetup_1.createFood)();
    }
};
exports.default = foodMechanics;
