"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endGame = exports.showPlayedTime = void 0;
const game_1 = __importDefault(require("../game/game"));
const showPlayedTime = () => {
    const seconds = game_1.default.time % 60;
    const minutes = Math.floor(game_1.default.time / 60) % 60;
    const hours = Math.floor(minutes / 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    return `Time: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
exports.showPlayedTime = showPlayedTime;
const endGame = () => {
    console.log("\n\nYou loose.\n");
    console.log(`Points: ${game_1.default.points}`);
    console.log((0, exports.showPlayedTime)());
    console.log("\nThanks for playing.");
    process.exit(0);
};
exports.endGame = endGame;
