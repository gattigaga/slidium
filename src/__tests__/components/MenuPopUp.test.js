import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import MenuPopUp from "components/MenuPopUp";
import MenuChild from "components/MenuChild";

let wrapper, onClick;

beforeEach(() => {
  onClick = jest.fn();
  wrapper = shallow(
    <MenuPopUp onClick={onClick}>
      <MenuChild label="New" />
      <MenuChild label="Open" isClickable={false} />
      <MenuChild label="Print" icon="print" />
    </MenuPopUp>
  );
});

describe("MenuPopUp", () => {
  it("renders correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders in other position", () => {
    wrapper = shallow(
      <MenuPopUp>
        <MenuChild label="New" />
        <MenuChild label="Open" isClickable={false} />
        <MenuChild label="Print" icon="print" />
      </MenuPopUp>
    );

    wrapper.setProps({ position: { x: "320px", y: "240px" } });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClick'", () => {
    expect(onClick.mock.calls.length).toEqual(0);
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
