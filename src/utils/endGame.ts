import game from "../game/game";

export const showPlayedTime = (): string => {
  const seconds = game.time % 60;
  const minutes = Math.floor(game.time / 60) % 60;
  const hours = Math.floor(minutes / 60);

  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");

  return `Time: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const endGame = (): void => {
  console.log("\n\nYou loose.\n");
  console.log(`Points: ${game.points}`);
  console.log(showPlayedTime());
  console.log("\nThanks for playing.");
  process.exit(0);
};
