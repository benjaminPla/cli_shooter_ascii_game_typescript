import { IGame } from "../interfaces/game";

const game: IGame = {
  bullets: {
    canSpawn: true,
    isWaveActive: false,
    items: [],
    minSpawnSpeed: 100,
    spawnSpeed: 1000,
    spawnSpeedDowngrade: 250,
    spawnSpeedTrigger: 1,
    movementSpeed: 200,
    waveInterval: 60 * 1000,
    waveWarningTime: 6000,
  },
  controlls: {
    exit: "escape",
    player: {
      up: "w",
      down: "s",
      right: "d",
      left: "a",
    },
  },
  food: {
    position: {
      x: 0,
      y: 0,
    },
    safeZonePercentage: 30,
  },
  frames: 30,
  intervals: {
    bullets: {
      movement: undefined,
      spawn: undefined,
      waves: undefined,
    },
    main: undefined,
    time: undefined,
  },
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

export default game;
