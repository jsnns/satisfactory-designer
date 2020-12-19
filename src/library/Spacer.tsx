import React from "react";
import { pxForSize, Size } from "../constants/uiSize";

interface Props {
  size: Size;
  fill?: boolean;
}

export const Spacer: React.FC<Props> = ({ size, fill = false }) => {
  return (
    <div
      style={{
        minHeight: pxForSize[size],
        width: fill ? "100%" : pxForSize[size],
      }}
    />
  );
};
