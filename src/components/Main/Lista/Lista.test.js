import React from "react";
import { shallow } from "enzyme";
import Lista from "./Lista";

describe("Lista", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lista />);
    expect(wrapper).toMatchSnapshot();
  });
});
