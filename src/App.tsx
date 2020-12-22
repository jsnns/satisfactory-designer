import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";
import "./App.scss";
import Satisfactory from "./images/logo/Satisfactory.png";
import { Designer } from "./views/Designer";
import { PreDesigner } from "./views/PreDesigner/PreDesigner";

function App() {
  return (
    <BrowserRouter>
      <div className="Header">
        <img src={Satisfactory} alt="Logo" />
        <h1>Ficsit Field Planner</h1>
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
