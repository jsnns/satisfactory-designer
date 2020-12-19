import React from "react";
import { useRecoilValue } from "recoil";
import { enabledOutputParts } from "../../../state/output";
import "./Preview.scss";
import { TreeView } from "./TreeView/TreeView";

interface Props {}

export const Preview: React.FC<Props> = () => {
  const outputParts = useRecoilValue(enabledOutputParts);

  return (
    <div className="Preview">
      <div className="Body">
        <h2>Factory Preview</h2>
        {outputParts.map((partType) => (
          <TreeView type={partType} />
        ))}
      </div>
    </div>
  );
};
