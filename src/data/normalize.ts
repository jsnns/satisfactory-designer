export const normalizeOverclockSpeed = (speed: number): number => {
  return Math.max(Math.min(speed, 2.5), 0);
};
