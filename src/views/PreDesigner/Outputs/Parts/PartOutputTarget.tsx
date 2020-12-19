import React from "react";
import { useRecoilState } from "recoil";
import { targetOutput } from "../../../../state/output";
import { Part, partTypeReadable } from "../../../../types/Part";
import "./Part.scss";

interface Props {
  type: Part;
}

export const PartOutputTarget: React.FC<Props> = ({ type }) => {
  const [output, setOutput] = useRecoilState(targetOutput(type));

  return (
    <div className="Part">
      <div className="PartType">
        <span>{partTypeReadable[type]}</span>
      </div>

      <div className="Options">
        <input
          className="TargetOutput"
          value={output}
          onChange={(e) => {
            let textValue = e.target.value;

            if (textValue.endsWith(".")) return;

            const value = Number(textValue);

            if (isNaN(value)) {
              return;
            }
            setOutput(value);
          }}
        />
      </div>
    </div>
  );
};
