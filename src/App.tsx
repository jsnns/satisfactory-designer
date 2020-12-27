import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import "../node_modules/normalize.css/normalize.css";
import "./App.scss";
import {
  serializeSchematic,
  updateSchematicIfNeeded,
} from "./data/schematicTools";
import Satisfactory from "./images/logo/Satisfactory.png";
import { schematicState } from "./state/schematic";
import { Designer } from "./views/FactoryDesigner/Designer";
import { PreDesigner } from "./views/PreDesigner/PreDesigner";

function App() {
  const [schematic, setSchematic] = useRecoilState(schematicState);

  useEffect(() => {
    updateSchematicIfNeeded(schematic, setSchematic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search]);

  return (
    <BrowserRouter>
      <div className="Header">
        <div className="Logo">
          <img src={Satisfactory} alt="Logo" />
          <h1>Ficsit Field Planner</h1>
        </div>
        <div className="Menu">
          {schematic.enabledOutputParts.length +
            schematic.enabledInputResources.length >
            0 && (
            <a
              href={`https://app.satisfactorydesigner.com/?schematic=${serializeSchematic(
                schematic
              )}`}
              className="Button Primary"
            >
              Bookmarklet
            </a>
          )}
        </div>
      </div>
      <div className="App">
        <Switch>
          <Route path="/" component={PreDesigner} exact />
          <Route path="/layout" component={Designer} exact />
        </Switch>
      </div>
      <div className="Footer">
        <div className="TM">
          The assets comes from Satisfactory or from websites created and owned
          by Coffee Stain Studios, who hold the copyright of Satisfactory. All
          trademarks and registered trademarks present in the image are
          proprietary to Coffee Stain Studios.
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
