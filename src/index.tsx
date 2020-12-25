import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./styles/fonts.scss";
import "./styles/index.scss";
import "./styles/normalize.scss";
import "./styles/styles.scss";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
