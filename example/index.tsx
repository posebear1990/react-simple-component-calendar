import React from "react";
import { render } from "react-dom";
import Example from "./Example";

const root = document.createElement("div");
root.classList.add("example");
document.body.appendChild(root);

render(<Example />, root);
