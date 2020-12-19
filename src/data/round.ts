export const roundPerMin = (perMin: number): number => {
  return Math.ceil(perMin * 100) / 100;
};
