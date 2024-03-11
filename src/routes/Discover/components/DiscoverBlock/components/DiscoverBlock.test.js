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

  test("renders the DiscoverItem components when data is not empty", () => {
    const data = [
      { images: ["image1.jpg", "image2.jpg"], name: "Item 1" },
      { images: ["image3.jpg", "image4.jpg"], name: "Item 2" },
    ];
    render(<DiscoverBlock text="Discover" id="discover-block" data={data} />);
    const discoverItems = screen.getAllByTestId("discover-item");
    expect(discoverItems.length).toBe(data.length);
  });
});
