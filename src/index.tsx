import * as React from "react";
import * as ReactDOM from "react-dom";
import "./vendor";
import "./vendor.scss";
import { App } from "@components";
import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
