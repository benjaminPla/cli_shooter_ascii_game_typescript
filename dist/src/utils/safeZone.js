"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeZoneMapY = void 0;
const game_1 = __importDefault(require("../game/game"));
exports.safeZoneMapY = Math.floor((game_1.default.food.safeZonePercentage / 100) * game_1.default.map.height);
