import React, { ReactElement } from "react";
import { roundPerMin } from "../../data/round";
import { WithPopover } from "../../library/Popover/Popover";
import "./PerMin.scss";

interface PerMinProps {
  perMin: number;
}

const Belt: React.FC<{ rate: number; label: string; perMin: number }> = ({
  rate,
  label,
  perMin,
}) => {
  return (
    <p className="Belt">
      {Math.ceil(perMin / rate)} x {label}
    </p>
  );
};

const getBeltsRequired = (perMin: number): ReactElement[] => {
  const belts: ReactElement[] = [
    <Belt perMin={perMin} rate={60} label="Mk1" />,
  ];

  if (perMin > 60) {
    belts.push(<Belt perMin={perMin} rate={120} label="Mk2" />);
  }
  if (perMin > 120) {
    belts.push(<Belt perMin={perMin} rate={240} label="Mk3" />);
  }
  if (perMin > 240) {
    belts.push(<Belt perMin={perMin} rate={480} label="Mk4" />);
  }
  if (perMin > 480) {
    belts.push(<Belt perMin={perMin} rate={960} label="Mk5" />);
  }

  return belts;
};

export const PerMin: React.FC<PerMinProps> = ({ perMin }) => {
  return (
    <WithPopover width={100} element={<>{getBeltsRequired(perMin)}</>}>
      <span>{roundPerMin(perMin)}/min</span>
    </WithPopover>
  );
};
