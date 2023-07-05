import readline from "readline";

const game = {
  map: {
    width: 32,
    height: 32,
    tiles: [],
  },
  player: {
    position: {
      x: 0,
      y: 0,
    },
  },
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
  bullets: {
    items: [],
    interval: 1000,
  },
};

const createMap = () => {
  const tiles = [];
  for (let i = 0; i < game.map.height; i++) {
    const row = [];
    for (let j = 0; j < game.map.width; j++) {
      row.push({ x: i, y: j, player: false });
    }
    tiles.push(row);
  }
  game.map.tiles = tiles;
};

const createPlayer = () => {
  game.player.position.x = Math.floor(game.map.width / 2);
  game.player.position.y = Math.floor(game.map.height / 2);
};

const createFood = () => {
  game.foodPosition.x = Math.floor(Math.random() * game.mapWidth);
  game.foodPosition.y = Math.floor(Math.random() * game.mapHeight);
};

const createBullet = () => {
  game.bullets.items.push({
    position: { x: Math.floor(Math.random() * game.mapWidth), y: 0 },
  });
};

createMap();
createFood();
createPlayer();

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
    // game.playerPosition.y--;
    game.player.position.x--;
  } else if (key.name === "s" && y < game.mapHeight - 1) {
    // game.playerPosition.y++;
    game.player.position.x++;
  } else if (key.name === "d" && x < game.mapWidth - 1) {
    // game.playerPosition.x++;
    game.player.position.y++;
  } else if (key.name === "a" && x > 0) {
    // game.playerPosition.x--;
    game.player.position.y--;
  }
});

const drawMap = () => {
  clearScreen();

  const player = "O";
  const food = "X";
  const bullet = "V";

  const wallVertical = "|";
  const wallHorizontal = "T";

  // game.bullets.items.forEach((bullet, index) => {
  // if (bullet.position.y >= game.mapHeight) {
  // game.bullets.items.splice(index, 1);
  // }
  // bullet.position.y++;
  // });

  const createMap = () => {
    // let map = "";
    // map += `${"T".repeat(game.mapWidth + 2)}\n`;
    // for (let i = 0; i < game.mapHeight; i++) {
    // let row = "";
    // for (let j = 0; j < game.mapWidth; j++) {
    // if (i === game.foodPosition.y && j === game.foodPosition.x) {
    // row += food;
    // } else if (i === game.playerPosition.y && j === game.playerPosition.x) {
    // row += player;
    // } else {
    // let isBulletPresent = false;
    // game.bullets.items.forEach((bullet) => {
    // if (bullet.position.x === j && bullet.position.y === i) {
    // row += bullet;
    // isBulletPresent = true;
    // }
    // });
    // if (!isBulletPresent) {
    // row += " ";
    // }
    // }
    // }
    // map += `|${row}|\n`;
    // }
    // map += `${"T".repeat(game.mapWidth + 2)}\n`;
    const map = game.map.tiles.map((row, rowIndex) => {
      const x = row.map((tile, tileIndex) => {
        // if (tile.player) {
        if (
          game.player.position.x === rowIndex &&
          game.player.position.y === tileIndex
        ) {
          return player;
        }
        // if (tile.y === game.map.width - 1) {
        // return "\n";
        // }
        if (tile.x === 0 || tile.x === game.map.height - 1) {
          return wallHorizontal;
        }
        if (tile.y === 0 || tile.y === game.map.width - 1) {
          return wallVertical;
        }
        return " ";
      });
      return x.join("");
    });
    return map.join("\n");
  };

  process.stdout.write(createMap());
  // process.stdout.write(JSON.stringify({ game }));
};

const eat = () => {
  if (
    game.playerPosition.x === game.foodPosition.x &&
    game.playerPosition.y === game.foodPosition.y
  ) {
    game.points++;
    createFood();
  }
};

setInterval(() => {
  drawMap();
  eat();
}, 1000 / game.frames);

// setInterval(() => {
// createBullet();
// }, game.bullets.interval);
