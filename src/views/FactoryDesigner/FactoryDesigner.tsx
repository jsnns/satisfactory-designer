import React from "react";
import { useRecoilState } from "recoil";
import { Spacer } from "../../library/Spacer";
import { designerState } from "../../state/designer";
import { PieceData } from "../../types/Piece";
import { Designer3D } from "./Designer3D";
import { DesignerMenu } from "./DesignerMenu/DesignerMenu";

export const FactoryDesigner: React.FC = () => {
  const [pieces, updatePieces] = useRecoilState(designerState.pieces);
  return (
    <div className="Designer">
      <h2>Factory Designer</h2>
      <Spacer size="medium" />
      <DesignerMenu />
      <Spacer size="medium" />
      <Designer3D
        pieces={pieces}
        updatePieces={(pieces: PieceData[]) => updatePieces(pieces)}
      />
    </div>
  );
};
