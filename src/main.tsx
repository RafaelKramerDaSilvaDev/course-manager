import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global-styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>Course Manager</div>

    <GlobalStyles />
  </React.StrictMode>
);
