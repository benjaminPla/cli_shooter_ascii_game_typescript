"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("./src/readline/readline");
const gameSetup_1 = require("./src/game/gameSetup");
(0, gameSetup_1.createMap)();
(0, gameSetup_1.createPlayer)();
(0, gameSetup_1.createFood)();
(0, readline_1.readlineSetup)();
(0, gameSetup_1.intervalsSetup)();
