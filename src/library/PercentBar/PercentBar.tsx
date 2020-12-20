import React from "react";
import "./PercentBar.scss";

interface PercentBarProps {
  max: number;
  fill: number;
}

export const PercentBar: React.FC<PercentBarProps> = ({ max, fill }) => {
  return (
    <div className="PercentBar">
      <div
        className="PercentBarFill"
        style={{ width: `${Math.min(Math.floor((fill / max) * 100), 100)}%` }}
      ></div>
    </div>
  );
};
