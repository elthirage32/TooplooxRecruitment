/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import List, { IList } from "../list";

function renderList(props: Partial<IList> = {}) {
  const defaultProps: IList = {
    items: [],
    emptyListComponent: <span>Empty list</span>,
    customIcon: undefined,
    trackKeyBy: "testKey",
    trackNameBy: "testName",
    trackArgumentBy: "testArgument",
    action() {},
  };
  return render(
    <>
      <List {...defaultProps} {...props} />
    </>
  );
}

describe("<List />", () => {
  test("Should display emptyListComponent while array is empty", async () => {
    const { findByText } = renderList();

    const emptyListComponent = await findByText("Empty list");

    expect(emptyListComponent).toBeDefined();
  });

  test("Should render listItems while items is not empty", async () => {
    const { findByTestId } = renderList({
      items: [{ testName: "John dee", testKey: 1, testArgument: "Argument" }],
    });

    const listItem = await findByTestId("list-item");

    expect(listItem).toBeDefined();
  });
});
