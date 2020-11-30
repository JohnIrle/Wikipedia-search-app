import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ResultCard from "../components/ResultCard";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders props", () => {
  act(() => {
    render(<ResultCard title="Title" extract="Extract" url="url" />, container);
    console.log(container);
  });
  expect(container.querySelector("card-text").textContent).toBe("extract");
});
