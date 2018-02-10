import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Separator from "components/Separator";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Separator />);
});

describe("Icon", () => {
  it("renders in horizontal", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in vertical", () => {
    wrapper.setProps({
      orientation: "vertical"
    });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
