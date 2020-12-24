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
      <div className="Head">
        <h2>Factory Preview</h2>
        {/* ENABLE ONCE READY */}
        {false && schematic.enabledOutputParts.length > 0 && (
          <Link to={`/designer?schematic=${btoa(JSON.stringify(schematic))}`}>
            <p className="Button Primary">Open in Designer</p>
          </Link>
        )}
      </div>
      <div className="Body">
        <Spacer size="medium" />
        {outputParts.map((partType) => (
          <TreeView type={partType} />
        ))}
      </div>
    </div>
  );
};
