export const normalizeToRange = (min: number, max: number) => (
  num: number
): number => {
  return Math.max(Math.min(num, max), min);
};

export const normalizeOverclockSpeed = normalizeToRange(0, 2.5);
export const normalizeBaseClock = normalizeToRange(1, 10);
