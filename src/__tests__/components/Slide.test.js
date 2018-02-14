import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Slide from "components/Slide";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Slide />);
});

describe("Slide", () => {
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
