import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { IceAndFireApp } from "./IceAndFireApp";
import { TanStackProvider } from "./config/plugins/TanStackProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanStackProvider>
      <IceAndFireApp />
    </TanStackProvider>
  </React.StrictMode>
);
