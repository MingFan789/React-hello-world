import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const multiButton = () => {
  let output = [];
  for (let i = 0; i < 4; ++i) output.push(<button>Button{i}</button>);
  return output;
};

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World
    </h1>
    <App />
    {multiButton()}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
