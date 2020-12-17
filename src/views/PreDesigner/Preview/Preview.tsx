import React from "react";
import { useRecoilValue } from "recoil";
import { selectedOutputs } from "../../../state/factoryOutputs";
import "./Preview.scss";
import { TreeView } from "./TreeView/TreeView";

interface Props {}

export const Preview: React.FC<Props> = () => {
  const selectedOutputTypes = useRecoilValue(selectedOutputs);

  return (
    <div className="Preview">
      <div className="Body">
        <h2>Factory Preview</h2>
        {selectedOutputTypes.map((partType) => (
          <TreeView type={partType} />
        ))}
      </div>
    </div>
  );
};
