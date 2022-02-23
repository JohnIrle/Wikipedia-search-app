import React from "react";
import {screen, render} from "@testing-library/react"

import ResultCard from "../components/ResultCard";

it("renders props", () => {
    const $title = "Title"
    const $extract = "Extract"
    const $url = "http://example.com"

  render(<ResultCard title={$title} extract={$extract} url={$url} />);

    const title = screen.getByText($title)
    const extract = screen.getByText($extract)
    const url = document.querySelector("a").getAttribute("href")

    expect(title).toBeInTheDocument();
    expect(extract).toBeInTheDocument();
    expect(url).toBe($url);
});
