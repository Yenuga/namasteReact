import React from "react";
import ReactDom from "react-dom/client";

// const main = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is react nested  h2 component "),
//     React.createElement("h2", {}, "This is react nested h2 component "),
//   ]),
// );

// const headingreact = React.createElement("h1", {}, "Hello world from React");

const heading = (
  <h1>This is heading exlample which is JSX trnspiled in to html content</h1>
);

const Heading = () => <h1>Heading from functional component</h1>;
const rootReact = ReactDom.createRoot(document.getElementById("root"));
const rootReact2 = ReactDom.createRoot(document.getElementById("root2"));
rootReact.render(<Heading />);
rootReact2.render(heading);
