import game from "../game/game";
import { clearScreen } from "../readline/readline";

export const showPlayedTime = () => {
  const seconds = game.time % 60;
  const minutes = Math.floor(game.time / 60) % 60;
  const hours = Math.floor(minutes / 60);

  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");

  return `Time: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const endGame = () => {
  clearScreen();
  console.log(`Points: ${game.points}`);
  console.log(showPlayedTime());
  console.log("\nThanks for playing.");
  process.exit(0);
};
