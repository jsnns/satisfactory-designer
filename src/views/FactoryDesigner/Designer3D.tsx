import React, { Component } from "react";
import { normalizeToRange } from "../../data/normalize";
import { ListenForKeyPress } from "../../library/ListenForKeyPress";
import { PieceData } from "../../types/Piece";
import { Piece } from "./Piece/Piece";
import "./styles/index.scss";

interface Pos {
  x: number;
  y: number;
}

interface DragState {
  pieceId: string;
  pieceRect: DOMRect;
  clickPosition: Pos;
}

interface Designer3DState {
  scale: number;
  drag: DragState | null;
}

interface DesignerProps {
  pieces: PieceData[];
  updatePieces: (pieces: PieceData[]) => void;
}

const INITIAL_STATE: Designer3DState = {
  scale: 1,
  drag: null,
};

const getRelativeRect = (parent: DOMRect, child: DOMRect): DOMRect => {
  return {
    bottom: child.bottom - parent.bottom,
    top: child.top - parent.top,
    left: child.left - parent.left,
    right: child.right - parent.right,
    x: child.x - parent.x,
    y: child.y - parent.y,
    width: child.width,
    height: child.height,
    toJSON: parent.toJSON,
  };
};

const pieceIndexFromID = (pieceId: string): number => {
  return Number(pieceId);
};

export class Designer3D extends Component<DesignerProps, Designer3DState> {
  constructor(props: DesignerProps) {
    super(props);

    this.state = INITIAL_STATE;
  }

  // ANCHOR Lifecycle
  componentDidMount() {}

  componentWillUnmount() {}

  // ANCHOR Calculated Properties
  get clientRect(): DOMRect {
    return document.getElementById("canvas")!.getBoundingClientRect();
  }

  getPieceRect(pieceId: string): DOMRect | null {
    const piece = document.getElementById(pieceId);
    if (!piece) return null;

    const pieceRect = piece!.getBoundingClientRect();
    return getRelativeRect(this.clientRect, pieceRect);
  }

  getPieceIDAtPagePos(clientPos: Pos): Element | null {
    const pieces = document
      .elementsFromPoint(clientPos.x, clientPos.y)
      .filter((element) => {
        return (
          element instanceof HTMLDivElement &&
          Number(element.id) > -1 &&
          element.id !== ""
        );
      })
      .sort((a, b) => Number(a.id) - Number(b.id));

    if (pieces.length < 1) return null;

    return pieces[0];
  }

  // ANCHOR Dragging
  movePiece(pieceIndex: number, pos: Pos) {
    const pieces = [...this.props.pieces];
    const pieceCopy = { ...this.props.pieces[pieceIndex], pos };
    pieces[pieceIndex] = pieceCopy;

    this.props.updatePieces(pieces);
  }

  onMouseDown = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setup required state for possible drag
    const clickPosition = { x: ev.clientX, y: ev.clientY };

    const piece = this.getPieceIDAtPagePos(clickPosition);
    if (!piece) return;

    const pieceRect = this.getPieceRect(piece.id);
    if (!pieceRect) return;

    this.setState({
      drag: {
        clickPosition,
        pieceId: piece.id,
        pieceRect,
      },
    });
  };

  onMouseMove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!this.state.drag) return;

    // update piece position based on delta between the initial state set in
    // onMouseDown and the current mouse position
    const pieceIndex = pieceIndexFromID(this.state.drag.pieceId);
    const mousePosition: Pos = { x: ev.clientX, y: ev.clientY };
    const { clickPosition, pieceRect } = this.state.drag;

    const newPosition: Pos = {
      x: mousePosition.x - clickPosition.x + pieceRect.x,
      y: mousePosition.y - clickPosition.y + pieceRect.y,
    };

    newPosition.x /= this.state.scale;
    newPosition.y /= this.state.scale;

    this.movePiece(pieceIndex, newPosition);
  };

  onMouseUp = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // clear drag state after mouse button is released
    this.setState({ drag: null });
  };

  // ANCHOR Scale and Zooming
  zoom = (amount: number): void => {
    console.log({ amount });
    this.setState({
      scale: normalizeToRange(0.8, 10)(this.state.scale + amount),
    });
  };

  onWheel = (ev: React.WheelEvent<HTMLDivElement>) => {
    if (ev.metaKey) {
      this.zoom(ev.deltaY / 100);
    }
  };

  render() {
    console.log(this.state);

    return (
      <ListenForKeyPress
        handlers={{ "=": () => this.zoom(1), "-": () => this.zoom(-1) }}
      >
        <div className="DesignContainer" onWheel={this.onWheel}>
          <div
            id="canvas"
            className="Design"
            onMouseMove={this.onMouseMove}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            style={{
              transformOrigin: "top left",
              transform: `scale(${this.state.scale})`,
            }}
          >
            {this.props.pieces.map((piece, index) => (
              <Piece
                key={`PieceId${index}`}
                updatePiecePosition={() => {}}
                piece={piece}
                pieceId={index}
              />
            ))}
          </div>
        </div>
      </ListenForKeyPress>
    );
  }
}
