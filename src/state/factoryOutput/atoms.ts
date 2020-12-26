import { atom, atomFamily } from "recoil";
import { Part } from "../../types/Part";

export const enabledOutputParts = atom<Part[]>({
  default: [],
  key: "EnabledOutputParts",
});

export const targetOutput = atomFamily<number, Part>({
  key: "TargetOutput",
  default: 0,
});
