import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";
import { Designer } from "./views/PreDesigner/Designer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Designer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
