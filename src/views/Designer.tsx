import React from "react";
import { match } from "react-router-dom";
import { useRecoilState } from "recoil";
import { updateSchematicIfNeeded } from "../data/schematicTools";
import { schematicState } from "../state/schematic";
import "./Designer.scss";
import { FactoryDesigner } from "./FactoryDesigner/FactoryDesigner";
import { Preview } from "./FactoryDesigner/Preview/Preview";

interface Props {
  match: match<{ schematic: string }>;
}

export const Designer: React.FC<Props> = ({ match }) => {
  const [schematic, setSchematic] = useRecoilState(schematicState);

  updateSchematicIfNeeded(schematic, setSchematic);

  return (
    <div className="FactoryDesigner">
      <Preview />
      <FactoryDesigner />
    </div>
  );
};
