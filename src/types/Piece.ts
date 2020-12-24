export const PIECE_TYPES = [
  "Foundation",
  "Splitter",
  "Merger",
  "Belt-90",
] as const;
export type PieceType = typeof PIECE_TYPES[number];

export interface PieceData {
  type: PieceType;
  transform?: {
    rotation?: number;
  };
  pos: {
    x: number;
    y: number;
  };
}
