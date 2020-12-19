import React from "react";
import { Spacer } from "../../../library/Spacer";
import "./DesignConfiguration.scss";
import { ProductionTable } from "./ProductionTable/ProductionTable";

interface Props {}

export const DesignConfiguration: React.FC<Props> = () => {
  return (
    <div className="DesignConfiguration">
      <h2>Design Configuration</h2>
      <Spacer size="medium" />
      <h3>Production Table</h3>
      <ProductionTable />
    </div>
  );
};
