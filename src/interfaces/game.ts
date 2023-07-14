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
    movementSpeed: number;
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
  intervals: {
    bullets: {
      movement?: NodeJS.Timeout;
      spawn?: NodeJS.Timeout;
      waves?: NodeJS.Timeout;
    };
    main?: NodeJS.Timeout;
    time?: NodeJS.Timeout;
  };
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
