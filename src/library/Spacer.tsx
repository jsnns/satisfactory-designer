import React from "react";
import { pxForSize, Size } from "../constants/uiSize";

interface Props {
  size: Size | "grow";
  fill?: boolean;
}

export const Spacer: React.FC<Props> = ({ size, fill = false }) => {
  if (size === "grow") return <div style={{ display: "flex", flexGrow: 1 }} />;

  return (
    <div
      style={{
        minHeight: pxForSize[size],
        width: fill ? "100%" : pxForSize[size],
      }}
    />
  );
};
