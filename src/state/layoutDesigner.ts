import { atom } from "recoil";
import { PieceData } from "../types/Piece";

const pieces = atom<PieceData[]>({
  key: "Pieces",
  default: [],
});

export const designerState = {
  pieces,
};
