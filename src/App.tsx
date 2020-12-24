import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "../node_modules/normalize.css/normalize.css";
import "./App.scss";
import { serializeSchematic } from "./data/schematicTools";
import Satisfactory from "./images/logo/Satisfactory.png";
import { schematicState } from "./state/schematic";
import { Designer } from "./views/Designer";
import { PreDesigner } from "./views/PreDesigner/PreDesigner";

function App() {
  const schematic = useRecoilValue(schematicState);
  return (
    <BrowserRouter>
      <div className="Header">
        <div className="Logo">
          <img src={Satisfactory} alt="Logo" />
          <h1>Ficsit Field Planner</h1>
        </div>
        <div className="Menu">
          {schematic.enabledOutputParts.length > 0 && (
            <a
              href={`https://app.satisfactorydesigner.com/${serializeSchematic(
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
          <Route path="/" exact>
            <PreDesigner />
          </Route>
          <Route path="/:schematic" component={PreDesigner} exact />
          <Route path="/designer/:schematic" component={Designer} />
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
