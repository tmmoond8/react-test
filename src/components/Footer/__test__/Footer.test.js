import React from "react";
import renderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer - Snapshot", () => {
  it("renders Footer", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
