import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "../node_modules/normalize.css/normalize.css";
import { Designer } from "./views/PreDesigner/Designer";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Designer />
          </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
