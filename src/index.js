import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";

const rootReact = ReactDom.createRoot(document.getElementById("root"));

rootReact.render(<App />);
