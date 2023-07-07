export interface ICoordinates {
  x: number;
  y: number;
}

export interface IGame {
  bullets: {
    canSpawn: boolean;
    items: ICoordinates[] | [];
    spawnSpeed: number;
    spawnSpeedTrigger: number;
  };
  food: {
    position: ICoordinates;
  };
  frames: number;
  map: {
    width: number;
    height: number;
    tiles: ICoordinates[][] | [];
  };
  player: {
    position: ICoordinates;
  };
  points: number;
  sprites: {
    bullets: string;
    food: string;
    player: string;
    wall: {
      vertical: string;
      horizontal: string;
    };
  };
  time: number;
}
