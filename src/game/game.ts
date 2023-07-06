import { IGame } from "../interfaces/game";

const game: IGame = {
  bullets: {
    items: [],
    spawnSpeed: 1000,
    canSpawn: true,
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

export default game;
