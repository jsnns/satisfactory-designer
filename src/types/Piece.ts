export const PIECE_TYPES = ["Foundation"] as const;
export type PieceType = typeof PIECE_TYPES[number];

export interface PieceData {
  type: PieceType;
  pos: {
    x: number;
    y: number;
  };
}
