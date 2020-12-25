import Belt90Image from "../../../images/tiles/belt-90.png";
import FoundationImage from "../../../images/tiles/foundation.png";
import MergerImage from "../../../images/tiles/merger.png";
import SplitterImage from "../../../images/tiles/splitter.png";
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
        transform: piece.transform
          ? `rotate(${piece.transform.rotation || 0})`
          : undefined,
      }}
    />
  );
};
export const Splitter: React.FC<Props> = ({ piece }) => {
  return (
    <img
      alt="Splitter"
      draggable={false}
      src={SplitterImage}
      className="Splitter"
      style={{
        width: 40,
        height: 40,
        transform: piece.transform
          ? `rotate(${piece.transform.rotation || 0}deg)`
          : undefined,
      }}
    />
  );
};
export const Merger: React.FC<Props> = ({ piece }) => {
  return (
    <img
      alt="Merger"
      draggable={false}
      src={MergerImage}
      className="Merger"
      style={{
        width: 40,
        height: 40,
        transform: piece.transform
          ? `rotate(${piece.transform.rotation || 0}deg)`
          : undefined,
      }}
    />
  );
};
export const Belt90: React.FC<Props> = ({ piece }) => {
  return (
    <img
      alt="Merger"
      draggable={false}
      src={Belt90Image}
      className="Merger"
      style={{
        width: 20,
        height: 20,
        transform: piece.transform
          ? `rotate(${piece.transform.rotation || 0}deg)`
          : undefined,
      }}
    />
  );
};

export const elementForPieceType: { [key in PieceType]: React.FC<Props> } = {
  Foundation,
  Merger,
  Splitter,
  "Belt-90": Belt90,
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
