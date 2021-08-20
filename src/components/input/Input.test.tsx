/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Input, { IInput } from "../input";

function renderInput(props: Partial<IInput> = {}) {
  const defaultProps: IInput = {
    value: "",
    handleChange() {},
    placeholder: "Test placeholder",
    onEnter() {},
  };
  return render(
    <>
      <Input {...defaultProps} {...props} />
    </>
  );
}

describe("<Input />", () => {
  test("Should render input", async () => {
    const { findByTestId } = renderInput();

    const input = await findByTestId("input");

    expect(input).toBeDefined();
  });

  test("Should receive change event", async () => {
    const handleChange = jest.fn();
    const { findByTestId } = renderInput({ handleChange });

    const input = await findByTestId("input");

    fireEvent.change(input, { target: { value: "Test value" } });

    expect(handleChange).toHaveBeenCalled();
  });
});
