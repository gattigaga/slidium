import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import MenuChild from "components/MenuChild";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = shallow(<MenuChild label="Open" icon="print" onClick={onClick} />);
});

describe("MenuChild", () => {
  it("renders as clickable", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders as non clickable", () => {
    wrapper.setProps({ isClickable: false });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClick'", () => {
    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });

  it("not calls 'onClick'", () => {
    wrapper.setProps({ isClickable: false });

    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(0);
  });
});
