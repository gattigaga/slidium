import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import MenuParent from "components/MenuParent";
import MenuChild from "components/MenuChild";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = shallow(<MenuParent label="File" onClick={onClick} />);
});

describe("MenuParent", () => {
  it("renders in close mode", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in open mode without children", () => {
    wrapper.setProps({ isOpen: true });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in open mode with children", () => {
    wrapper = shallow(
      <MenuParent label="File" onClick={onClick}>
        <MenuChild label="New" />
        <MenuChild label="Open" isClickable={false} />
        <MenuChild label="Print" icon="print" />
      </MenuParent>
    );

    wrapper.setProps({ isOpen: true });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClick'", () => {
    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
