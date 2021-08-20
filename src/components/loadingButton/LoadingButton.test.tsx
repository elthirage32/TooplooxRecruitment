/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LoadingButton, { ILoadingButton } from "../loadingButton";

function renderLoadingButton(props: Partial<ILoadingButton> = {}) {
  const defaultProps: ILoadingButton = {
    handleClick() {},
    label: "test",
    isLoading: false,
  };
  return render(
    <>
      <LoadingButton {...defaultProps} {...props} />
    </>
  );
}

describe("<LoadingButton />", () => {
  test("Should render button", async () => {
    const { findByTestId } = renderLoadingButton();

    const loadingButton = await findByTestId("loading-button");

    expect(loadingButton).toBeDefined();
  });

  test("Should be disabled while loading", async () => {
    const { findByTestId } = renderLoadingButton({ isLoading: true });

    const loadingButton = await findByTestId("loading-button");

    expect(loadingButton).toHaveClass("btn--disabled");
  });
});
