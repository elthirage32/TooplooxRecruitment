/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";

import ListItem, { IListItem } from "../listItem";

function renderListItem(props: Partial<IListItem> = {}) {
  const defaultProps: IListItem = {
    action() {},
    name: "John Dee",
    customIcon: undefined,
  };
  return render(
    <>
      <ListItem {...defaultProps} {...props} />
    </>
  );
}

describe("<ListItem />", () => {
  test("Should render list item", async () => {
    const { findByTestId } = renderListItem();

    const listItem = await findByTestId("list-item");

    expect(listItem).toBeDefined();
  });

  test("Should render custom icon", async () => {
    const { findByTestId } = renderListItem({ customIcon: faRadiation });

    const customIcon = await findByTestId("custom-icon");

    expect(customIcon).toBeDefined();
  });
});
