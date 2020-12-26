import { atom, atomFamily } from "recoil";
import { MinerType } from "../../types/Miner";
import { ResourceNode } from "../../types/ResourceNode";
import { PurityCount } from "./inputTypes";

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

export const minerType = atomFamily<MinerType, ResourceNode>({
  key: "MinerType",
  default: "Mk. 1",
});

export const overclockMultipler = atomFamily<number, ResourceNode>({
  key: "OverclockMultipler",
  default: 1,
});
