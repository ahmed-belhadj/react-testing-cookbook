import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow";
import expect from "expect";
import faker from "faker";

import Component from "./Component";

describe("Component", () => {
  it("should render className='hello world'", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Component string={faker.random.words()} />);
    const actual = renderer
      .getRenderOutput()
      .props.className.includes("hello world");
    const expected = true;
    console.log(actual);
    expect(actual).toEqual(expected);
  });
});
