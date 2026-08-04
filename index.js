const main = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is react nested  h2 component "),
    React.createElement("h2", {}, "This is react nested h2 component "),
  ]),
);

const headingreact = React.createElement("h1", {}, "Hello world from React");
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(main);
