import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import HandleClickOutside from "../HandleClickOutside";
import { Spacer } from "../Spacer";
import "./Info.scss";

interface InfoProps {
  infoText: string;
  direction?: "left" | "right";
  width?: number;
}

export const WithInfo: React.FC<InfoProps> = ({ infoText, children }) => {
  return (
    <div className="WithInfo">
      <div className="Content">{children}</div>
      <Spacer size="small" />
      <Info infoText={infoText} />
    </div>
  );
};

export const Info: React.FC<InfoProps> = ({
  infoText,
  direction = "right",
  width = 200,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <HandleClickOutside handler={() => setOpen(false)}>
      <div className="InfoButton">
        <AiFillInfoCircle
          onClick={() => setOpen(!open)}
          size={24}
          color="gray"
        />
        {open && (
          <div
            className="InfoPopover"
            style={{
              width,
              [direction]: 0,
            }}
          >
            {infoText}
          </div>
        )}
      </div>
    </HandleClickOutside>
  );
};
