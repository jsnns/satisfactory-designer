import { atom } from "recoil";
import { ResourceNode } from "./types/ResourceNode";

export const selectedInputNodes = atom<ResourceNode[]>({
  key: "InputNodes",
  default: [],
});
