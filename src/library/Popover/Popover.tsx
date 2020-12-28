import React, { ReactElement, useState } from "react";
import "./Popover.scss";

interface PopoverProps {
  element: ReactElement;
  direction?: "left" | "right";
  width?: number;
}

export const WithPopover: React.FC<PopoverProps> = ({
  element,
  children,
  direction,
  width,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <span
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="WithPopover"
    >
      <div className="Content">{children}</div>
      {open && (
        <Popover direction={direction} element={element} width={width} />
      )}
    </span>
  );
};

export const Popover: React.FC<PopoverProps> = ({
  element,
  direction = "right",
  width = 200,
}) => {
  return (
    <div
      className="Popover"
      style={{
        width,
        [direction]: "50%",
      }}
    >
      {element}
    </div>
  );
};
