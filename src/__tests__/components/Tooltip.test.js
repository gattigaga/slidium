import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Tooltip from "components/Tooltip";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Tooltip text="New File" />);
});

describe("Tooltip", () => {
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with additional class", () => {
    wrapper.setProps({
      className: "my-class"
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
