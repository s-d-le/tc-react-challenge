import React from "react";
import { render, screen } from "@testing-library/react";
import DiscoverBlock from "./DiscoverBlock";

describe("DiscoverBlock", () => {
  test("renders the header text correctly", () => {
    const text = "Discover";
    render(<DiscoverBlock text={text} id="discover-block" data={[]} />);
    const headerElement = screen.getByText(text);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the skeleton items when data is empty", () => {
    const data = [];
    render(<DiscoverBlock text="Discover" id="discover-block" data={data} />);
    const skeletonItems = screen.getAllByTestId("skeleton-item");
    expect(skeletonItems.length).toBe(10);
  });
});
