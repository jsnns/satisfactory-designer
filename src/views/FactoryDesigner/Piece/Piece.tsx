import FoundationImage from "../../../images/tiles/foundation.png";
import { PieceData, PieceType } from "../../../types/Piece";
import "./Piece.scss";

interface Props {
  piece: PieceData;
  pieceId: number;
  updatePiecePosition: (pieceId: number, x: number, y: number) => void;
}

export const Foundation: React.FC<Props> = ({ piece }) => {
  return (
    <img
      alt="Foundation"
      draggable={false}
      src={FoundationImage}
      className="Foundation"
      style={{
        width: 80,
        height: 80,
      }}
    />
  );
};

export const elementForPieceType: { [key in PieceType]: React.FC<Props> } = {
  Foundation: Foundation,
};

export const Piece: React.FC<Props> = (props) => {
  const { piece } = props;

  const Element = elementForPieceType[piece.type];

  return (
    <div
      id={String(props.pieceId)}
      className="Piece"
      style={{
        position: "absolute",
        top: piece.pos.y,
        left: piece.pos.x,
      }}
    >
      <Element {...props} />
    </div>
  );
};
