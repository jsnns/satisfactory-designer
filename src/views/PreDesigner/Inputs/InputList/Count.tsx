import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./InputRow.scss";

interface CountProps {
  label: string;
  count: number;
  plus: () => void;
  minus: () => void;
}

export const Count: React.FC<CountProps> = ({ label, count, plus, minus }) => {
  return (
    <div className="Count">
      <span className="Purity">{label}</span>
      <div className="Buttons">
        <button onClick={minus} disabled={count === 0}>
          <AiOutlineMinus width={10} height={10} />
        </button>
        <label>{count}</label>
        <button onClick={plus}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};
