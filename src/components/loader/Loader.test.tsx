/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader, { ILoader } from "../loader";

function renderLoader(props: Partial<ILoader> = {}) {
  const defaultProps: ILoader = {
    size: "xs",
  };
  return render(
    <>
      <Loader {...defaultProps} {...props} />
    </>
  );
}

describe("<Loader />", () => {
  test("Should render loader", async () => {
    const { findByTestId } = renderLoader();

    const loader = await findByTestId("loader");

    expect(loader).toBeDefined();
  });

  test("Should render loader with specific size", async () => {
    const { findByTestId } = renderLoader({ size: "1x" });

    const loader = await findByTestId("loader");

    expect(loader).toHaveClass("fa-1x");
  });
});
