import React from "react";
import ReactDOM from "react-dom/client";
import Anecdotes from "./anecdotes";

// import Unicafe from "./Unicafe";

// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Unicafe /> */}

    <Anecdotes />
  </React.StrictMode>
);
