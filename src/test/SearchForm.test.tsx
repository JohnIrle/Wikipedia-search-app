// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import * as React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";
import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  it("renders", () => {
    const onSubmit = jest.fn();
    render(<SearchForm submit={onSubmit} />);
  });

  it("disables button when search is empty", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<SearchForm submit={onSubmit} />);

    expect(getByText("Submit")).toBeDisabled();
  });

  it("calls submit function", async () => {
    const onSubmit = jest.fn(e => e.preventDefault());
    const { getByText, getByPlaceholderText } = render(
      <SearchForm submit={onSubmit} />
    );

    await userEvent.type(
      getByPlaceholderText("Enter a term to search."),
      "test"
    );
    userEvent.click(getByText("Submit"));

    expect(onSubmit).toHaveBeenCalled();
  });
});
