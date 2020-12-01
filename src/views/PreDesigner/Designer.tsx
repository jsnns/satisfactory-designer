import React from "react";
import { Spacer } from "../../components/Spacer";
import { DesignConfiguration } from "./DesignConfiguration/DesignConfiguration";
import "./Designer.scss";
import { Inputs } from "./Inputs/Inputs";
import { Outputs } from "./Outputs/Outputs";
import { Preview } from "./Preview/Preview";

interface Props {}

export const Designer: React.FC<Props> = () => {
  return (
    <div className="Designer--">
      <div className="Inputs-Container">
        <Inputs />
      </div>
      <div className="Center--">
        <div className="DesignConfig-Container">
          <DesignConfiguration />
        </div>
        <Spacer size="medium" />
        <div className="Preview-Container">
          <Preview />
        </div>
      </div>
      <div className="Outputs-Container">
        <Outputs />
      </div>
    </div>
  );
};
