import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App";

const container = document.getElementById("root")!;

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
