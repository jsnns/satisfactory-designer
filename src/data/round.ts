import { round } from "lodash";

export const roundPerMin = (perMin: number): number => round(perMin, 1);
