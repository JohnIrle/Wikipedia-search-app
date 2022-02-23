import React from "react";
import { render } from "@testing-library/react";

import ResultCard from "../components/ResultCard";

it("renders props", () => {
  const $title = "Title";
  const $extract = "Extract";
  const $url = "http://example.com";

  const { getByText } = render(
    <ResultCard title={$title} extract={$extract} url={$url} />
  );

  expect(getByText($title)).toBeInTheDocument();
  expect(getByText($extract)).toBeInTheDocument();
  expect(document?.querySelector("a")?.getAttribute("href")).toBe($url);
});
