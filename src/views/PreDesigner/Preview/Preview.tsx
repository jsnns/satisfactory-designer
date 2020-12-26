import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TreeView } from "../../../components/OutputTreeView/TreeView";
import { WithInfo } from "../../../library/Info/Info";
import { Spacer } from "../../../library/Spacer";
import { factoryOutputState } from "../../../state/factoryOutput";
import { schematicState } from "../../../state/schematic";
import "./Preview.scss";

interface Props {}

export const Preview: React.FC<Props> = () => {
  const outputParts = useRecoilValue(factoryOutputState.enabledOutputParts);
  const schematic = useRecoilValue(schematicState);

  return (
    <div className="Preview">
      <WithInfo
        infoText={[
          "Factory layout tree-view.",
          'The percentage by each row indicates the clock speed of each machine. (Read as "I need N machines each at clockspeed X%")',
          "The percentage is displayed instead of fractional machines. Fractional machines don't provide you any additional info.",
        ]}
      >
        <div className="Head">
          <h2>Factory Preview</h2>
          {/* ENABLE ONCE READY */}
          {false && schematic.enabledOutputParts.length > 0 && (
            <Link to={`/designer?schematic=${btoa(JSON.stringify(schematic))}`}>
              <p className="Button Primary">Open in Designer</p>
            </Link>
          )}
        </div>
      </WithInfo>
      <div className="Body">
        <Spacer size="medium" />
        {outputParts.map((partType) => (
          <TreeView key={`OutputPart${partType}`} type={partType} />
        ))}
      </div>
    </div>
  );
};
