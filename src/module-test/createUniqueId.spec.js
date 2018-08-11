import expect from "expect";
import faker from "faker";

import createId from "./createUniqueId";

describe("createUniqueId", () => {
  it("should convert a random number and description into a unique id containing both", () => {
    const random = faker.random.number();
    const actual = createId(random, "Lorem ipsum dolor sit amet");
    const expected = `${random}-lorem-ipsum`;
    expect(actual).toEqual(expected);
  });
});
