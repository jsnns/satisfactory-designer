import React from "react";
import { AddResourceNode } from "./AddResourceNode";
import "./Inputs.scss";
import { ListResourceNodes } from "./ListResourceNodes";

export const Inputs: React.FC = () => {
  return (
    <div className="Inputs">
      <h2>Factory Inputs</h2>
      <AddResourceNode />
      <ListResourceNodes />
    </div>
  );
};
