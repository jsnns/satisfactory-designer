export const roundPerMin = (perMin: number): number => {
  return Math.floor(perMin * 100) / 100;
};
