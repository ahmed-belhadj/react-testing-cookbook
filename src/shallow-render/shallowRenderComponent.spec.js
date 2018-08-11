import React from "react";
import ReactTestRenderer from "react-test-renderer";
import expect from "expect";
import faker from "faker";

import Component from "./Component";

describe("Component", () => {
  it("should shallow render", () => {
    const renderer = ReactTestRenderer.create(
      <Component string={faker.random.words()} />
    );
    console.log(renderer.toJSON());
  });
});
