import React from "react";
import { useRecoilState } from "recoil";
import { designerState } from "../../../state/layoutDesigner";
import { PieceData } from "../../../types/Piece";

export const DesignerMenu: React.FC = () => {
  const [pieces, updatePieces] = useRecoilState(designerState.pieces);

  const addSplitter = (origin: number = 50) => {
    const newPieces: PieceData[] = [
      {
        pos: { x: origin, y: origin },
        type: "Splitter",
        transform: { rotation: 90 },
      },
      {
        type: "Belt-90",
        pos: { x: origin + 13, y: origin - 15 },
        transform: { rotation: 0 },
      },
      {
        type: "Belt-90",
        pos: { x: origin + 13, y: origin + 35 },
        transform: { rotation: -90 },
      },
      {
        pos: { x: origin + 30, y: origin + 30 },
        type: "Splitter",
        transform: { rotation: 90 },
      },
      {
        pos: { x: origin + 30, y: origin - 30 },
        type: "Splitter",
        transform: { rotation: 90 },
      },
    ];

    const pieces_ = [...pieces, ...newPieces];
    updatePieces(pieces_);
  };

  return (
    <div className="DesignerMenu">
      <button onClick={() => addSplitter()} className="Button Primary">
        Add 2{"=>"}4 Splitter
      </button>
    </div>
  );
};
