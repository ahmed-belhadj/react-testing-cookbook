import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow";
import expect from "expect";
import faker from "faker";

import Component from "./Component";

const randomString = faker.random.words();

describe("Component", () => {
  it("should render JSX", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Component string={randomString} />);
    const actual = renderer.getRenderOutput();
    const expected = [<h1>Hello</h1>, <h2>{randomString}</h2>];
    console.log(actual.props.children);
    expect(actual.type).toBe("div");
    expect(actual.props.children).toEqual(expected);
  });
});
