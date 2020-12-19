import { atom, atomFamily } from "recoil";
import { MachineType } from "../types/Machine";

export const enabledMachineConfigs = atom<MachineType[]>({
  default: [],
  key: "EnabledMachineConfigs",
});

export const baseMachineClock = atomFamily<number, MachineType>({
  default: 1,
  key: "Base Machine Clock",
});
