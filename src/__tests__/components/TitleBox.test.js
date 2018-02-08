import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import TitleBox from "components/TitleBox";

let wrapper, onChange;

beforeEach(() => {
  onChange = jest.fn();
  wrapper = shallow(<TitleBox value="My Slides" onChange={onChange} />);
});

describe("TitleBox", () => {
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onChange'", () => {
    const event = {
      target: {
        value: "My Slides"
      }
    };

    expect(onChange.mock.calls.length).toEqual(0);
    wrapper.simulate("change", event);
    expect(onChange.mock.calls.length).toEqual(1);
  });
});
