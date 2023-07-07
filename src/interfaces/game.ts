export interface ICoordinates {
  x: number;
  y: number;
}

export interface IGame {
  bullets: {
    canSpawn: boolean;
    isWaveActive: boolean;
    items: ICoordinates[] | [];
    minSpawnSpeed: number;
    spawnSpeed: number;
    spawnSpeedDowngrade: number;
    spawnSpeedTrigger: number;
    speed: number;
    waveInterval: number;
    waveWarningTime: number;
  };
  controlls: {
    exit: string;
    player: {
      up: string;
      down: string;
      right: string;
      left: string;
    };
  };
  food: {
    position: ICoordinates;
    safeZonePercentage: number;
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
