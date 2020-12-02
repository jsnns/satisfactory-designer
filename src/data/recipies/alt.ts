import { Recipe } from "../../types/Recipe";

export const SolidSteelIngot: Recipe = {
  inputs: [
    {
      part: "iron_ingot",
      perMin: 40,
    },
    {
      part: "coal",
      perMin: 40,
    },
  ],
  output: {
    part: "steel_ingot",
    perMin: 60,
  },
};
