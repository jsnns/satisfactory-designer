import { atom, atomFamily } from "recoil";
import { MinerType } from "../../types/Miner";
import { PurityCount, ResourceNode } from "../../types/ResourceNode";

export const enabledInputNodes = atom<ResourceNode[]>({
  default: [],
  key: "EnabledResourceNodes",
});

export const input = atomFamily<PurityCount, ResourceNode>({
  key: "InputNodes",
  default: {
    pure: 0,
    normal: 0,
    impure: 0,
  },
});

export const minerTypeState = atom<MinerType>({
  key: "MinerSpeed",
  default: "Miner Mk 1.",
});

export const overclockSpeedState = atom<number>({
  key: "OverclockSpeed",
  default: 1,
});
