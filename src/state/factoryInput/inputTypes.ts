import { MinerType } from "../../types/Miner";
import { Purity } from "../../types/ResourceNode";

export type PurityCount = { [key in Purity]: number };
export interface InputConfiguration {
  minerType: MinerType;
  overclockMultipler: number;
}
