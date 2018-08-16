import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow";
import expect from "expect";
import faker from "faker";

import Component from "./Component";

describe("Component", () => {
  it("should shallow render", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Component string={faker.random.words()} />);
    const result = renderer.getRenderOutput();

    console.log(result);
  });
});
