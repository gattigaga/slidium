import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Tool from "components/Tool";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = shallow(<Tool icon="print" onClick={onClick} />);
});

describe("Tool", () => {
  it("renders without tooltip", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with tooltip", () => {
    wrapper.setProps({
      tooltip: "Print"
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in active", () => {
    wrapper.setProps({
      isActive: true
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClick'", () => {
    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
