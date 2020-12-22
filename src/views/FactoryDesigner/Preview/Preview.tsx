import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TreeView } from "../../../components/OutputTreeView/TreeView";
import { Spacer } from "../../../library/Spacer";
import { enabledOutputParts } from "../../../state/output";
import { schematicState } from "../../../state/schematic";
import "./Preview.scss";

interface Props {}

export const Preview: React.FC<Props> = () => {
  const outputParts = useRecoilValue(enabledOutputParts);
  const schematic = useRecoilValue(schematicState);

  return (
    <div className="Preview">
      <div className="Body">
        <div className="Head">
          <h2>Factory Preview</h2>
          {schematic.enabledOutputParts.length > 0 && (
            <Link to={`/designer/${btoa(JSON.stringify(schematic))}`}>
              <p className="Button Primary">Edit Schematic</p>
            </Link>
          )}
        </div>
        <Spacer size="medium" />
        {outputParts.map((partType) => (
          <TreeView type={partType} />
        ))}
      </div>
    </div>
  );
};
