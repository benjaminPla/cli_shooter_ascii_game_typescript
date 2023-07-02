import readline from "readline";

const game = {
  mapWidth: 32,
  mapHeight: 32,
  playerPosition: {
    x: 16,
    y: 16,
  },
  foodPosition: {
    x: 0,
    y: 0,
  },
  points: 0,
  frames: 30,
};

const createFood = () => {
  game.foodPosition.x = Math.floor(Math.random() * game.mapWidth);
  game.foodPosition.y = Math.floor(Math.random() * game.mapHeight);
};

createFood();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearScreen = () => {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}
readline.cursorHidden = true;
rl.output.write("\x1B[?25l");

rl.input.on("keypress", (_, key) => {
  const { x, y } = game.playerPosition;
  if (key.name === "escape") {
    clearScreen();
    console.log("Thanks for playing.");
    process.exit(0);
  } else if (key.name === "w" && y > 0) {
    game.playerPosition.y--;
  } else if (key.name === "s" && y < game.mapHeight - 1) {
    game.playerPosition.y++;
  } else if (key.name === "d" && x < game.mapWidth - 1) {
    game.playerPosition.x++;
  } else if (key.name === "a" && x > 0) {
    game.playerPosition.x--;
  }
});

const drawMap = () => {
  clearScreen();

  const player = "O";
  const food = "X";

  const createMap = () => {
    let map = "";
    map += `${"T".repeat(game.mapWidth + 2)}\n`;
    for (let i = 0; i < game.mapHeight; i++) {
      let row = "";
      for (let j = 0; j < game.mapWidth; j++) {
        if (i === game.foodPosition.y && j === game.foodPosition.x) {
          row += food;
        } else if (i === game.playerPosition.y && j === game.playerPosition.x) {
          row += player;
        } else {
          row += " ";
        }
      }
      map += `|${row}|\n`;
    }
    map += `${"T".repeat(game.mapWidth + 2)}\n`;
    return map;
  };

  process.stdout.write(createMap());
  process.stdout.write(JSON.stringify({ game }));
};

const x = () => {
  if (
    game.playerPosition.x === game.foodPosition.x &&
    game.playerPosition.y === game.foodPosition.y
  ) {
    game.points++;
    createFood();
  }
};

drawMap();

setInterval(() => {
  drawMap();
  x();
}, 1000 / game.frames);
