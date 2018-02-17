import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import SlideThumbnail from "components/SlideThumbnail";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = shallow(<SlideThumbnail indexCaption={1} onClick={onClick} />);
});

describe("SlideThumbnail", () => {
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in active", () => {
    wrapper.setProps({
      isActive: true
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with additional class", () => {
    wrapper.setProps({
      className: "my-class"
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClick'", () => {
    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
